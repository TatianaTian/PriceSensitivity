require('isomorphic-fetch');
const dotenv = require('dotenv');
const Koa = require('koa');
const next = require('next');
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');

dotenv.config();

const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy');
const Router = require('koa-router');
const {receiveWebhook, registerWebhook} = require('@shopify/koa-shopify-webhooks');
const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy');
const getSubscriptionUrl = require('./server/getSubscriptionUrl');
const detect_transaction = require('../detect_transaction');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY, HOST2, API_VERSION } = process.env;

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();
  server.use(session({ secure: true, sameSite: 'none' }, server));
  server.keys = [SHOPIFY_API_SECRET_KEY];

  server.use(
    createShopifyAuth({
      apiKey: SHOPIFY_API_KEY,
      secret: SHOPIFY_API_SECRET_KEY,
      HOST2,
      scopes: ['write_products', 'read_products','read_orders', 'write_orders'],
      //afterAuth(ctx) {
      async afterAuth(ctx) {
        const { shop, accessToken } = ctx.session;
        ctx.cookies.set('shopOrigin', shop, {
          httpOnly: false,
          secure: true,
          sameSite: 'none'
        });

        const registration = await registerWebhook({
          address: `${HOST2}/webhooks/products/create`,
          topic: 'PRODUCTS_CREATE',
          accessToken,
          shop,
          apiVersion: ApiVersion.October19
        });

        const registration2 = await registerWebhook({
          address: `${HOST2}/webhooks/orders/create`,
          topic: 'ORDERS_CREATE',
          accessToken,
          shop,
          apiVersion: ApiVersion.October19
        });

        if (registration.success) {
          console.log('Successfully registered product webhook!');
        } else {
          console.log('Failed to register product webhook', registration.result);
        }

       if (registration2.success) {
          console.log('Successfully registered order webhook!');
        } else {
          console.log('Failed to register order webhook', registration.result);
        }
        ctx.redirect('/');
      //await getSubscriptionUrl(ctx, accessToken, shop);
      },
    }),
  );
  const webhook = receiveWebhook({secret: SHOPIFY_API_SECRET_KEY});
  router.post('/webhooks/products/create', webhook, (ctx) => {
    console.log('Received product create webhook: ', ctx.state.webhook);
    //var shop_money = ctx.state.webhook.title;
    console.log('title is ', ctx.state.webhook.payload.title)
    detect_order_paid.detect_order_paid();
    //console.log('price is ',presentment_money)
  });
  router.post('/webhooks/orders/create', webhook, (ctx) => {
    //console.log('Received order create webhook: ', ctx.state.webhook);
    //console.log('Order domain: ', ctx.state.webhook.domain);
    //console.log('Order payload: ', ctx.state.webhook.payload);
    detect_transaction.detect_transaction(ctx.state.webhook.domain, ctx.state.webhook.payload);
  });

  server.use(graphQLProxy({version: ApiVersion.October19}))
  router.get('*', verifyRequest(), async (ctx) => { 
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  });
  server.use(router.allowedMethods());
  server.use(router.routes());

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});
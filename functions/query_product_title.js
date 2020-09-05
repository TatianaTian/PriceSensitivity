global.fetch = require("node-fetch");

const query_product_title = async (currency, country_list) => {
    const query_product_title = JSON.stringify({
        query: `query {
            products(first: 250) {
                edges {
                  node {
                    id
                    title
                    priceRange {
                        maxVariantPrice {
                            amount
                        }
                    }
                  }
                }
              }
        }`
    });

    const shop = 'haloy.myshopify.com'
    const accessToken = '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'

    const response = await fetch(`https://${shop}/admin/api/2019-10/graphql.json`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "X-Shopify-Access-Token": accessToken,
        },
        
        body: query_product_title
    })
    const orderJson = await response.json();

    //console.log("orderJson edges are ",orderJson.data.products.edges)

    var all_product = [['all','All products', 100]]
    for (i=0; i<orderJson.data.products.edges.length; i++){
        var single_product = []
        single_product.push(orderJson.data.products.edges[i].node.id)
        single_product.push(orderJson.data.products.edges[i].node.title)
        single_product.push(orderJson.data.products.edges[i].node.priceRange.maxVariantPrice.amount/100)
        all_product.push(single_product)
    }
    
    //console.log("all in product_title is ", all_product)
    return all_product
    
    
};

module.exports = query_product_title; 

//query_product_title('GBP','GB')

/*import {Button, Card, Form, FormLayout, Layout, Page, SettingToggle, Stack, TextField, TextStyle} from '@shopify/polaris';
import { handleQuoteSubmit } from "../trade/trades/src/test.js"  
import { handleTradeSubmit } from "../trade/trades/src/test.js"    

class AnnotatedLayout extends React.Component {
  state = {
    currency: 'EUR',
    amount: '10',
    list: [],
  };

  render() {
   
    const {currency, amount, list } = this.state; 
    
    return (
      <Layout.AnnotatedSection
      title="Check exchange rates"
      description="Select your currency and amount to insure, we will give you our exchange rate rate instantly."
      >
        <Card sectioned>
        <Form onSubmit={this.handleQuoteSubmit2}>
            <FormLayout>
              <TextField
                value={currency}
                onChange={this.handleChange('currency')}
                label="Currency"
                type="currency"
              />
              <TextField
                value={amount}
                onChange={this.handleChange('amount')}
                label="Amount"
                type="amount"
              />
              <p>The quote is </p>
              <Stack distribution="trailing">
                <Button submit>
                  Check
                </Button>
              </Stack>
            </FormLayout>
          </Form>

          <Form onSubmit={this.handleTradeSubmit2}>
            <FormLayout>
              <Stack distribution="trailing">
                <Button submit>
                  Trade
                </Button>
              </Stack>
            </FormLayout>
          </Form>

        </Card>
      </Layout.AnnotatedSection> 
    )
  }
  handleChange = (field) => {
    return (value) => this.setState({[field]: value});
  };
  handleQuoteSubmit2 = () => {
    var currency_save = this.state.currency
   // handleQuoteSubmit(currency_save)

  // Retrieves the list of items from the Express app

    console.log(this.state.list)

  };
  handleTradeSubmit2 = () => {
    var currency_save = this.state.currency
    var amount_save = this.state.amount
    handleTradeSubmit(currency_save,amount_save)
  };
  
}

export default AnnotatedLayout;
*/


import { EmptyState, Layout, Page } from '@shopify/polaris';
import { ResourcePicker, TitleBar } from '@shopify/app-bridge-react';
import store from 'store-js';
import ResourceListWithProducts from '../components/ResourceList';
//import img2 from '../images/france_flag.png';


const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
//const img2 = require('../images/earth.svg')

class Index extends React.Component {
  state = { open: false };
  render() {
    const emptyState = !store.get('ids');
    return (
      <Page>
        
        <ResourcePicker
          resourceType="Product"
          showVariants={false}
          open={this.state.open}
          onSelection={(resources) => this.handleSelection(resources)}
          onCancel={() => this.setState({ open: false })}
        />
        {emptyState ? (
            <Layout>
            <EmptyState
                heading="Find Price Sensitivity "
                action={{
                content: 'Start analyze',
                onAction: () => this.setState({ open: true }),
                }}
                image={img}
            >
                <p>See how your international sales respond to price changes caused by exchange rates. Pinpoint price-sensitive
                markets, send coupons accordingly 
                </p>
            
            </EmptyState>
            </Layout>
            
        ) : (
            //<p>This is resource list with products</p>
            <ResourceListWithProducts />
        )}
      </Page >
    );
  }
  handleSelection = (resources) => {
    const idsFromResources = resources.selection.map((product) => product.id);
    this.setState({ open: false });
    //console.log(idsFromResources);
    store.set('ids', idsFromResources);
  };
}

export default Index;
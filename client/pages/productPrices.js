import '../style/style.css'
import { AppProvider, Page, Card, DataTable, Button, ResourcePicker } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import {FaLock } from 'react-icons/fa';
import store from 'store-js';
import Modal from '../components/Modal_Currency'
import React, {useState, useCallback, OptionList, setSelected} from 'react';
let request_bid_ask = require('/Users/tatianatian/Desktop/Startup/shopify_front_back_end/trade/trades/src/request_bid_ask.js')



// Data
/*
const rows2 = [
  ['GBP', '1.23', 1.24, '10,000 GBP', '$15.82'],
  ['EUR', '1.10', 1.09, '5,000 EUR', '$7.62'],
  ['CAD', '1.07', 1.08, '2,000 CAD', '$11.34'],
];*/



//const rows = [[currency,quote, 1.2, amount, '15']]
//console.log('new lock is ', store.get('new_lock').amount)
//

//const currency = store.get('new_lock').currency[0]
//const amount = store.get('new_lock').amount
//const quote = store.get('new_lock').quote

//const rows = [[currency,quote, 1.2, amount, '15']]
//console.log("rows are ", rows)

const rows = [['GBP', 1.3, 1.2, 100, '15']]


// Function

class productsPrice extends React.Component {
    // Initialize the state
    constructor(props){
      super(props);
      this.state = {
        list: [],
        open_currency: false,
        rows:[],
        active: true,
        selected: []
      }
      console.log("1")
    }
    // Fetch the list on first mount
    componentDidMount() {
      this.getList();
      console.log("2")
    }
  
    // Retrieves the list of items from the Express app
    getList = () => {
      //fetch('/api/getList')
      //fetch('https://ebb450c1.ngrok.io')
      fetch('http://localhost:5000/api/getList')
      .then(res => res.json())
      .then(list => this.setState({ list }))
      console.log("3")
    }  


  render() {
    const { list, open_currency } = this.state;
    
    return (
      <div className="main_background_image">
      <h1>List of Items</h1>
      {/* Check to see if any items are found*/}
      {list.length ? (
        <div>
          {/* Render the list of items */}
          {list.map((item) => {
            return(
              <div>
                {item}
              </div>
            );
          })}
        </div>
      ) : (
        <div>
          <h2>No List Items Found</h2>
        </div>
      )
    }

      <Page title="Gauranteed Exchange Rate">
            <Card>
              <DataTable
                columnContentTypes={[
                  'text',
                  'numeric',
                  'numeric',
                  'numeric',
                  'numeric',
                ]}
                headings={[
                  "Buyer's currency",
                  'Gauranteed Exchange Rate',
                  'Real-time Exchange Rate',
                  'Gauranteed Amount',
                  'Extra Revenue',
                ]}
                rows={rows}
                totals={['', '', '', '', '$34.78']}
              />
            </Card>
          </Page>

          <Modal/>
          
    </div>

    
    );




  }


}



 export default productsPrice;
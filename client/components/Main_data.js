import React, { useState }from 'react';
import {Card, Layout, DisplayText, TextStyle, DataTable} from '@shopify/polaris';
import store from 'store-js';
import MapChart from "./MapChart";
import ReactTooltip from "react-tooltip";
import price_sensitive_market from "../functions/price_sensitive_market";
const country_code_to_name = require('../functions/country_code_to_name')
//import france_flag from '../images/france_flag';



export default function Main_data(props) {  
    const [content, setContent] = useState("");
    const currency_list = price_sensitive_market(props.tabs, props.maps)

    console.log("currency_list is", currency_list)

    var rows_price_sensitive = [
      //['Emerald Silk Gown', '$875.00'],
      //['Mauve Cashmere Scarf', '$230.00'],
    ];

    var rows_price_range = [
      //['Emerald Silk Gown', '$875.00'],
      //['Mauve Cashmere Scarf', '$230.00'],
    ];

    const countryListMap = props.countryListMap
    const percChangeMap = props.perc_change_map

    console.log("countryListMap is", countryListMap)
    console.log("percChangeMap is", percChangeMap)

    // price elasticity
    for (var i=0; i<currency_list.length; i++){
      const currency = currency_list[i]
      const country = countryListMap.get(currency)

      console.log("currency is", currency)
      console.log("country is", country)

      var country_string =''
      for (var j=0; j<country.length; j++){
        if (country_code_to_name(country[j])!= undefined){
          country_string += country_code_to_name(country[j])+', '
        }
      }
      var country_string = country_string.substring(0, country_string.length-2);

      console.log("country_string is", country_string)
      rows_price_sensitive.push([currency, country_string])
      console.log("percChangeMap.get(currency_list[i]) is ", percChangeMap.get(currency_list[i]))
      const perc = Math.round(percChangeMap.get(currency_list[i])*10000)/100 + '%'
      rows_price_range.push([currency, perc])
    }

 


    
    var rows_price_change = [
      ['EUR','12%'],
      ['CAD','15%'],
      ['GBP','17%']
    ]

    var rows_price_volatie = [
      ['EUR','France, Italy, Germany'],
      ['CAD','Canada']
      ['GBP','UK']
    ]
    

    return (
    
          <Layout>


              <Layout.Section oneThird>
            
              <Card title="Price Range Analyzed" sectioned>
              <DataTable
                  columnContentTypes={[
                    'text',
                    'text',
                  ]}
                  headings={[
                    'Currency',
                    'Price Moving % Range',
                  ]}
                  rows={rows_price_range}
                />

                </Card>
                </Layout.Section>
                <Layout.Section oneThird>
              <Card title="Your Most Price Sentitive Markets" sectioned>
              <DataTable
                  columnContentTypes={[
                    'text',
                    'text',
                  ]}
                  headings={[
                    'Currency',
                    'Price Sensitive Country',
                  ]}
                  rows={rows_price_sensitive}
                />
                </Card>
                </Layout.Section>
                <Layout.Section oneThird>
                <Card title="Your Most Price Volatile Markets" sectioned>
                <DataTable
                  columnContentTypes={[
                    'text',
                    'text',
                  ]}
                  headings={[
                    'Currency',
                    'Price Volatile Country',
                  ]}
                  rows={rows_price_sensitive}
                />
                </Card>
      
              </Layout.Section>
              <Layout.Section>
              <Card title="Price Change Magnitue" sectioned>
            
               <MapChart setTooltipContent={setContent} />
               <ReactTooltip>{content}</ReactTooltip>  
              </Card>
             </Layout.Section>
      
          </Layout>


    );

  }

  function displayBlock(currency) {
    render(
      {currency}
    )
     
  }

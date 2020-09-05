import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import {Tabs} from '@shopify/polaris';
import store from 'store-js';
import { Redirect } from '@shopify/app-bridge/actions';
import { Context } from '@shopify/app-bridge-react';
import Country_data from "../components/Country_data";
import Main_data from "../components/Main_data";
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const change_format2 = require('../functions/change_format2')



class ResourceListWithProducts extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      list : [[],[],[]],
      selected: 0,  
      list2:[[],[]]
    }
  }
  static contextType = Context;

  componentDidMount() {
    this.getList();
    //this.getCountryData();
    console.log("here")
    //console.log("list is ", this.state.list)
    //change_format2(this.state.list)
  }

  getList = () => {
    fetch('http://localhost:5000/api/tabs')
    .then(res => res.json())
    .then(list2 => this.setState({ list2 }))
  }

  
  getCountryData = () => {
    fetch('http://localhost:5000/api/country_data')
    .then(res => res.json())
    .then(country_data => this.setState({ country_data }))
    console.log("3")
  }

  
  render() {
    const {list, selected, list2} = this.state;

    //change_format2(list)
    /*
    if (list2===null){
      console.log("loading...")
    }{
      console.log("list2 is ")
    }*/
    const tab =  list2[0]

    //try {
      
      console.log("list2 is ", list2)
      console.log("selected is ", selected)
      const [map, product_id_title_map, product_id_price_map, store_currency, fx_map, countryListMap, perc_change_map] = change_format2(list2)
      console.log('product_id_title_map is ', product_id_title_map)
      console.log('perc_change_map is ', perc_change_map)
      /*
      const currency = tab[select]
      const [date, revenue, fx] = myMap.get(currency)
 

      console.log("date is ", date)
      console.log("price is ", revenue)
      console.log("exchange_rate is ", fx)


      store.set('date', date)
      store.set('price', revenue)
      store.set('exchange_rate', fx)*/
    /*}
    catch(err) {
      console.log("loading...")
    }*/
    //store.set('date',[2,3])
    //console.log("store get in detect transaction is", localStorage.getItem('date'))

   


    

    //console.log("lis1 is ", list[0])

    //console.log("list is ", list[1])
    //console.log("selected is ", selected)

    var i = 0
    if (selected > 0){
      i = selected - 1
    }


    /*
    const date = list[1][i][0]
    const price = list[1][i][1]
    const exchange_rate = list[1][i][2]
    store.set('date', date)
    store.set('price', price)
    store.set('exchange_rate', exchange_rate)

    const level = list[2]
    store.set('level', level)
    //console.log('level is ', level)
*/
   // var tab = list[0]
  
  
    
  console.log("tab is ", tab)
  

  
    return (
      <div className="main_background_image">
      {/* Check to see if any items are found*/}
      {list2[0][0] === undefined ? (
        
        <div>
          <h2>Working Hard And Analyzing...</h2>
        <Loader
        type="Oval"
        color="#63b7af"
        height={80}
        width={80}
        timeout={20000} //3 secs

          />
          </div>
      ) : (
  
        <div className="main_background_image">
        <Tabs tabs={tab} selected={selected} onSelect={(selected) => this.setState({selected})} fitted={true} >
          {selected===0? (
            
            <Main_data tabs={tab} maps={map} countryListMap={countryListMap} perc_change_map={perc_change_map}/>
        ):(
  
            <Country_data select={selected} tabs={tab} maps={map} product_id_title_map={product_id_title_map} product_id_price_map={product_id_price_map} store_currency={store_currency} fx_map={fx_map}/>
        )}
  
        </Tabs>
        </div>
     
      )
    }
    </div>
    
    );
  }


}

 export default ResourceListWithProducts;
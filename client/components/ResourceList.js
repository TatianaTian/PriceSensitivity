import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { 
  Card,
  ResourceList,
  Stack,
  TextStyle,
  Thumbnail, 
} from '@shopify/polaris';
import store from 'store-js';
import { Redirect } from '@shopify/app-bridge/actions';
import { Context } from '@shopify/app-bridge-react';



class ResourceListWithProducts extends React.Component {
    // Initialize the state
    constructor(props){
      super(props);
      this.state = {
        list: []
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
    const { list } = this.state;
    return (
      <div>
      <h1>List of Items22</h1>
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
    </div>
    );
  }
}

 export default ResourceListWithProducts;
import React, {useCallback, useState} from 'react';
import {Button, Modal, Card, OptionList, Form, FormLayout, TextField} from '@shopify/polaris';
import {FaLock } from 'react-icons/fa';
let request_bid_ask = require('/Users/tatianatian/Desktop/Startup/shopify_front_back_end/trade/trades/src/request_bid_ask.js')
let store = require('/Users/tatianatian/Desktop/Startup/shopify_front_back_end/client/node_modules/store-js/dist/store.legacy')



export default function ModalExample() {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState([]);
  const [active2, setActive2] = useState(true);

  const [url, setUrl] = useState('');
  const handleSubmit = useCallback((_event) => setUrl(''), []);
  const handleUrlChange = useCallback(
    (value) => setUrl(value), []
    );

  const handleChange = useCallback(() => setActive(!active), [active]);

  const handleChange3 = () => {
    setActive2(!active2), [active2]
    console.log("selected is ", selected)
    console.log("value is ", url)

    request_bid_ask.request_bid_ask(selected);
    setTimeout(function(){  
      var bid_ask_rate2 = store.get('user').quote 
      console.log("bid_ask_rate2 is",bid_ask_rate2)
    }, 2000);
   
    console.log("at handleChange3");
    store.set('new_lock', { currency: selected, amount: url, quote: "1.22" })
    console.log("set")
  };

  const handleChange4 = () => {
    store.set('new_lock', { currency: selected, amount: url, quote: "1.22" })

  };

  var bid_ask_rate2 = 1.2

  
  return (
    <div style={{height: '500px'}}>

      <Button onClick={handleChange}><FaLock/> Add Currency</Button>

      {active2 ? (
      <Modal
        open={active}
        onClose={handleChange}
        title="Pick Currency"
        primaryAction={{
          content: 'Next Step',
          onAction: handleChange3,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: handleChange,
          },
        ]}
      >    
           <Card>
              <OptionList
                  onChange={setSelected}
                  options={[
                  {value: 'AUD', label: 'Australian Dollar'},
                  {value: 'NZD', label: 'New Zealand Dollar'},
                  {value: 'JPY', label: 'Japanese Yen'},
                  ]}
                  selected={selected}
              />

              <Form noValidate onSubmit={handleSubmit}>
                <FormLayout>
                  <TextField
                    value={url}
                    onChange={handleUrlChange}
                    label="Amount in buyer's currency"
                    type="amount"
                  />

                  <Button submit>Submit</Button>
                </FormLayout>
              </Form>


          </Card>
      </Modal>  ) : (

        <Modal
        open={active}
        onClose={handleChange}
        title="Guaranteed Rate"
        primaryAction={{
          content: 'Get the Insurance',
          onAction: handleChange4,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: handleChange,
          },
        ]}
        >    
          <Card>
            {
              bid_ask_rate2==1.2?(
              <p>yes</p>
              ) : (
              <p>no</p>
              )
            }
          </Card>
        </Modal>
      
      )}

    </div>
  );

}; 



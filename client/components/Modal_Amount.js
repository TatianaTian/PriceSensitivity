import React, {useCallback, useState} from 'react';
import {Button, Modal, TextContainer, Card, OptionList} from '@shopify/polaris';
import {FaLock } from 'react-icons/fa';

export default function ModalExample() {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState([]);
  
  const handleChange = useCallback(() => setActive(!active), [active]);
  const handleChange2 = () => {
    console.log("hangle change 2")
  }

  
  return (
    <div style={{height: '500px'}}>
      <Button onClick={handleChange}><FaLock/> Add Currency</Button>
      <Modal
        open={active}
        onClose={handleChange}
        title="Pick Currency"
        primaryAction={{
          content: 'Next Step',
          onAction: handleChange2,
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
</Card>
      </Modal>
    </div>
  );

}

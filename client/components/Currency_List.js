import React, {useState} from 'react';
import {Card, OptionList, Button} from '@shopify/polaris';

export default function OptionListExample() {
  const [selected, setSelected] = useState([]);

  return (
    <Card>
      <OptionList
        title="Inventory Location"
        onChange={setSelected}
        options={[
          {value: 'AUD', label: 'Australian Dollar'},
          {value: 'NZD', label: 'New Zealand Dollar'},
          {value: 'JPY', label: 'Japanese Yen'},
        ]}
        selected={selected}
      />
    </Card>
  );
}




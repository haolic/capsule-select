import React from 'react';
import SelectItem from './SelectItem';
const SelectorContent = ({ data }) => {
  console.log(data);

  return data.map(item => (
    <div key={item.key}>
      <SelectItem />
    </div>
  ));
};

export default SelectorContent;

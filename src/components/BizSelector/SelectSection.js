import React from 'react';
import SelectItem from './SelectItem';
import './SelectSection.less';
const SelectorContent = ({ data }) => {
  console.log(data);
  return data.map(item => (
    <div key={item.key} className="selector-content-section">
      <div>{item.title}</div>
      {item.list.map(el => (
        <SelectItem label={el.title} key={el.id} />
      ))}
    </div>
  ));
};

export default SelectorContent;

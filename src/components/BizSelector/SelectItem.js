import React, { useState } from 'react';
import { Checkbox } from 'antd';

const SelectItem = ({ label }) => {
  const [checked, toggleChecked] = useState(false);
  return (
    <Checkbox onChange={e => toggleChecked(e.target.checked)} checked={checked}>
      {label}
    </Checkbox>
  );
};

export default SelectItem;

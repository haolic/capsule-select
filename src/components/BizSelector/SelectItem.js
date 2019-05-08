import React, { useState } from 'react';
import { Checkbox } from 'antd';

const SelectItem = () => {
  const [checked, toggleChecked] = useState(false);
  return (
    <Checkbox onChange={e => toggleChecked(e.target.checked)} checked={checked}>
      Checkbox
    </Checkbox>
  );
};

export default SelectItem;

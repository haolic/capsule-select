import React, { useState } from 'react';
import { Checkbox } from 'antd';

const SelectItem = () => {
  const [checked, toggleChecked] = useState(false);
  return (
    <div>
      <Checkbox onChange={e => toggleChecked(e.target.checked)} checked={checked}>
        Checkbox
      </Checkbox>
    </div>
  );
};

export default SelectItem;

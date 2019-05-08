import React from 'react';
import { Icon, Popover } from 'antd';

import SelectSection from './SelectSection';
import './index.less';

class BizSelector extends React.Component {
  render() {
    const { label, data } = this.props;
    return (
      <div className="biz-content">
        <Popover content={<SelectSection data={data} />} placement="bottom">
          <div className="label">
            {label} <Icon type="down" className="label-icon" />
          </div>
        </Popover>
      </div>
    );
  }
}

export default BizSelector;

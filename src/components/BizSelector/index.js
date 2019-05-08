import React from 'react';
import { Icon, Popover } from 'antd';
import { connect } from 'dva';
import SelectSection from './SelectSection';
import './index.less';
@connect(({ bizSelect }) => bizSelect)
class BizSelector extends React.Component {
  render() {
    const { label } = this.props;
    console.log(this.props)
    return (
      <div className="biz-content">
        <Popover content={<SelectSection />} placement="bottom">
          <div className="label">
            {label} <Icon type="down" className="label-icon" />
          </div>
        </Popover>
      </div>
    );
  }
}

export default BizSelector;

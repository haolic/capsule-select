import React from 'react';
import { Icon, Popover } from 'antd';
import './index.less';

class BizSelector extends React.Component {
  selectorContent = () => {
    return (
      <div>
        
      </div>
    );
  };
  render() {
    const { label } = this.props;

    return (
      <div className="biz-content">
        <Popover content={this.selectorContent()} placement="bottom">
          <div className="label">
            {label} <Icon type="down" className="label-icon" />
          </div>
        </Popover>
      </div>
    );
  }
}

export default BizSelector;

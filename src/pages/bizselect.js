import React from 'react';
import BizSelector from '../components/BizSelector';
import { connect } from 'dva';
@connect(({ bizSelect }) => bizSelect)
class PageBizSelect extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'bizSelect/fetchData',
    });
  }
  render() {
    const { bizSelectorData } = this.props;
    return (
      <div>
        <BizSelector label="名称小八1" data={bizSelectorData} />
      </div>
    );
  }
}
export default PageBizSelect;

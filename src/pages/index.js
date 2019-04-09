import styles from './index.less';
import { connect } from 'dva';
import CapsuleSelector from './../components/CapsuleSelector';
import { Popover } from 'antd';

const homePage = props => {
  const { dispatch, capsuleList, selectedCapsule } = props;
  const itemClick = item => {
    dispatch({
      type: 'capsuleSelector/itemClick',
      payload: item,
    });
  };
  const deleteClick = capsule => {
    dispatch({
      type: 'capsuleSelector/deleteClick',
      payload: capsule,
    });
  };
  const dropDownSelect = (keys, items) => {
    console.log(keys);
    console.log(items);
  };
  return (
    <div className={styles.container}>
      <div>
        <CapsuleSelector
          capsuleList={capsuleList}
          selectedCapsule={selectedCapsule}
          itemClick={itemClick}
          deleteClick={deleteClick}
          dropDownSelect={dropDownSelect}
        />
      </div>
    </div>
  );
};
export default connect(({ capsuleSelector }) => {
  return {
    ...capsuleSelector,
  };
})(homePage);

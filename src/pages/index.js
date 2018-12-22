import styles from './index.less';
import { connect } from 'dva';
import CapsuleSelector from './../components/CapsuleSelector';

const homePage = props => {
  const { dispatch, capsuleList, isShowList, selectedCapsule } = props;
  const inputClick = () => {
    dispatch({
      type: 'capsuleSelector/changeListShow',
      payload: true,
    });
  };
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
  return (
    <div className={styles.container}>
      <CapsuleSelector
        capsuleList={capsuleList}
        isShowList={isShowList}
        selectedCapsule={selectedCapsule}
        inputClick={inputClick}
        itemClick={itemClick}
        deleteClick={deleteClick}
      />
    </div>
  );
};
export default connect(({ capsuleSelector }) => {
  return {
    ...capsuleSelector,
  };
})(homePage);

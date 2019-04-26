import React, {Fragment} from 'react';
import styles from './index.less';
import { connect } from 'dva';
import CapsuleSelector from './../components/CapsuleSelector';

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
  const arr = [1,2,3,4,5,6];
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
      <ul>
        {
          arr.map(e => {
            return <Fragment>
              <li>{e + '' + Math.random()}</li>
              <li>{e + '' + Math.random()}</li>
              <li>{e + '' + Math.random()}</li>
            </Fragment>
          })
        }
      </ul>
    </div>
  );
};
export default connect(({ capsuleSelector }) => {
  return {
    ...capsuleSelector,
  };
})(homePage);

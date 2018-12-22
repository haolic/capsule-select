import { Table, Icon } from 'antd';
import styles from './index.less';
export default function(props) {
  const { inputClick, itemClick, deleteClick, capsuleList, isShowList, selectedCapsule } = props;
  return (
    <div className={styles.content}>
      <div className={styles.selectorwrap}>
        {selectedCapsule.map(capsule => (
          <div className="capsuleWrap" key={capsule.id}>
            {capsule.displayName}
            <Icon type="close-circle" onClick={() => deleteClick(capsule)} className="deleteicon" />
          </div>
        ))}
        <div className="inputwrap">
          <input
            onClick={inputClick}
            placeholder="请点击选择"
            value=""
            readOnly
            className={styles.selectinput}
          />
          <ul className="list" style={{ display: isShowList ? 'block' : 'none' }}>
            {capsuleList.map(li => (
              <li key={li.id} onClick={() => itemClick(li)}>
                {li.displayName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

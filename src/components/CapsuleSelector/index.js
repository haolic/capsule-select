import React from 'react';
import { Icon, Table } from 'antd';
import styles from './index.less';
class CapsuleSelect extends React.Component {
  state = {
    isShowList: false,
    showDropDownId: '',
  };
  componentDidMount() {
    window.document.addEventListener('click', () => {
      this.setState({
        isShowList: false,
        showDropDownId: '',
      });
    });
  }
  inputClick = () => {
    this.setState({
      isShowList: true,
    });
  };
  itemClick = li => {
    this.props.itemClick && this.props.itemClick(li);
    this.setState({
      isShowList: false,
    });
  };
  capsuleClick = (cap, e) => {
    this.setState({
      showDropDownId: cap.id,
    });
  };
  rowSelection = {
    onChange: (selectedKeys, selectedItems) => {
      this.props.dropDownSelect && this.props.dropDownSelect(selectedKeys, selectedItems);
    },
  };
  render() {
    const { deleteClick, capsuleList = [], selectedCapsule = [] } = this.props;
    const { isShowList, showDropDownId } = this.state;
    const len = capsuleList.length;
    const columns = [
      {
        key: 1,
        dataIndex: 'name',
      },
    ];
    return (
      <div className={styles.selectorwrap}>
        {selectedCapsule.map(capsule => (
          <div
            className="capsuleWrap"
            onClick={e => {
              e.nativeEvent.stopImmediatePropagation();
              return this.capsuleClick(capsule, e);
            }}
            key={capsule.id}
          >
            {capsule.displayName}
            <Icon type="close-circle" onClick={() => deleteClick(capsule)} className="deleteicon" />
            <div
              className="capsuleDown"
              style={{
                overflow: 'hidden',
                height:
                  showDropDownId === capsule.id
                    ? capsule.children.length
                      ? capsule.children.length * 32
                      : 53
                    : 0,
                border: showDropDownId === capsule.id ? '1px solid #ccc' : 'none',
                boxShadow:
                  showDropDownId === capsule.id ? '2px 2px 7px 0px rgba(0, 0, 0, 0.26)' : 'none',
              }}
            >
              <Table
                rowKey="id"
                rowSelection={this.rowSelection}
                dataSource={capsule.children}
                columns={columns}
                showHeader={false}
                className="capsuletable"
                size="small"
                pagination={false}
              />
            </div>
          </div>
        ))}
        <div className="inputwrap">
          <input
            onClick={e => {
              e.nativeEvent.stopImmediatePropagation();
              this.inputClick();
            }}
            placeholder="请点击选择"
            value=""
            readOnly
            className={styles.selectinput}
          />
          <ul
            className="list"
            style={{
              height: isShowList ? len * 32 : 0,
              border: isShowList && len ? '1px solid #ccc' : 'none',
              boxShadow: isShowList && len ? '2px 2px 7px 0px rgba(0, 0, 0, 0.26)' : 'none',
              overflow: 'hidden',
            }}
          >
            {capsuleList.map(li => (
              <li
                key={li.id}
                onClick={e => {
                  e.nativeEvent.stopImmediatePropagation();
                  this.itemClick(li);
                }}
              >
                {li.displayName}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default CapsuleSelect;

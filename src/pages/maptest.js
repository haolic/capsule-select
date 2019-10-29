import React from 'react';
import AceEditor from 'react-ace';
import 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import './ace.less';

class Maptest extends React.Component {
  state = {
    list: [
      {
        id: 0,
        name: '数据智能决策平台',
        list: [
          { id: 0, name: '数据智能决策平台2' },
          { id: 1, name: '借呗决策平台2' },
          { id: 2, name: '花呗智能看板2' },
        ],
      },
      {
        id: 1,
        name: '借呗决策平台',
        list: [
          { id: 0, name: '数据智能决策平台2' },
          { id: 1, name: '借呗决策平台2' },
          { id: 2, name: '花呗智能看板2' },
        ],
      },
      {
        id: 2,
        name: '花呗智能看板',
        list: [
          { id: 0, name: '数据智能决策平台2' },
          { id: 1, name: '借呗决策平台2' },
          { id: 2, name: '花呗智能看板2' },
        ],
      },
    ],
  };
  level2Click = (firstLevel, secLevel) => {
    console.log(firstLevel, secLevel);
  };
  render() {
    const { list } = this.state;
    return (
      <div
        style={{
          marginTop: 24,
        }}
      >
        {list.map((firstLevel, index) => {
          return (
            <div
              key={firstLevel.id}
              style={{
                width: 200,
                border: '1px solid #000',
                borderRadius: 4,
                padding: 5,
                margin: '10px auto',
              }}
            >
              <div
                style={{
                  textAlign: 'left',
                  cursor: 'pointer',
                }}
              >
                {firstLevel.name}
              </div>
              {firstLevel.list.map((secLevel, index) => {
                return (
                  <div
                    key={secLevel.id}
                    style={{
                      cursor: 'pointer',
                      border: '1px solid #ccc',
                      borderRadius: '3px',
                      margin: '3px 0',
                    }}
                    onClick={() => this.level2Click(firstLevel, secLevel)}
                  >
                    {secLevel.name}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
export default Maptest;

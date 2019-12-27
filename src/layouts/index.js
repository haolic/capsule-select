import React, { useState } from 'react';
import { Button } from 'antd';
import Link from 'umi/link';
import styles from './index.css';

const btnList = [
  { name: '胶囊选择器', key: '/' },
  { name: 'ace编辑器', key: '/ace' },
  { name: '业务选择器', key: '/bizselect' },
  { name: 'reactHooks', key: '/reactHooks' },
  { name: '遍历测试', key: '/maptest' },
  { name: 'css融合效果', key: '/CssFilter' },
];
function BasicLayout(props) {
  const [pageTitle, setPageTitle] = useState('胶囊选择器');
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>{pageTitle}</h1>
      <div className={styles.navWrap}>
        {btnList.map(el => (
          <Link to={el.key}>
            <Button
              onClick={() => {
                setPageTitle(el.name);
              }}
            >
              {el.name}
            </Button>
          </Link>
        ))}
        <Link to="/">
          <Button
            type="primary"
            onClick={() => {
              setPageTitle('胶囊选择器');
            }}
          >
            返回
          </Button>
        </Link>
      </div>
      <div
        style={{
          padding: 24,
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

export default BasicLayout;

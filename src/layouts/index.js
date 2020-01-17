import React, { useState } from 'react';
import { Button } from 'antd';
import Link from 'umi/link';
import btnList from './menuConfig';
import styles from './index.css';

// const allPageMod = require.context('../pages', true, /index\.js$/);
// const keys = allPageMod.keys();
// const allPage = keys.map(el => allPageMod(el).default);

function BasicLayout(props) {
  const [pageTitle, setPageTitle] = useState('胶囊选择器');
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>{pageTitle}</h1>
      <div className={styles.navWrap}>
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
        {btnList.map(el => (
          <Link key={el.key} to={el.key} className={styles.btnWrap}>
            <Button
              className={styles.btn}
              onClick={() => {
                setPageTitle(el.name);
              }}
            >
              {el.name}
            </Button>
          </Link>
        ))}
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

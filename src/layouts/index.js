import React, { useState } from 'react';
import { Button } from 'antd';
import Link from 'umi/link';
import btnList from './menuConfig';
import GridLayout from './components/GridLayout';
import styles from './index.css';

// const allPageMod = require.context('../pages', true, /index\.js$/);
// const keys = allPageMod.keys();
// const allPage = keys.map(el => allPageMod(el).default);

function BasicLayout(props) {
  const [pageTitle, setPageTitle] = useState('胶囊选择器');
  const [selectedBtn, setSelectedBtn] = useState('/');
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>{pageTitle}</h1>
      <div className={styles.navWrap}>
        <Link to="/">
          <Button
            type="primary"
            onClick={() => {
              setPageTitle('胶囊选择器');
              setSelectedBtn('/');
            }}
          >
            返回
          </Button>
        </Link>
        {btnList.map(el => (
          <Link key={el.key} to={el.key} className={styles.btnWrap}>
            <Button
              type={el.key === selectedBtn && "primary"}
              ghost={el.key === selectedBtn}
              className={styles.btn}
              onClick={() => {
                setPageTitle(el.name);
                setSelectedBtn(el.key);
              }}
            >
              {el.name}
            </Button>
          </Link>
        ))}
      </div>
      <GridLayout>{props.children}</GridLayout>
    </div>
  );
}

export default BasicLayout;

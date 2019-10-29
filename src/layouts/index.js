import styles from './index.css';
import { Button } from 'antd';
import Link from 'umi/link';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>capsuleSelect</h1>
      <div className={styles.navWrap}>
        <Link to="/">
          <Button>capsuleSelect</Button>
        </Link>
        <Link to="/ace">
          <Button>ace</Button>
        </Link>
        <Link to="/bizselect">
          <Button>bizselect</Button>
        </Link>
        <Link to="/reactHooks">
          <Button>reactHooks</Button>
        </Link>
        <Link to="/maptest">
          <Button>maptest</Button>
        </Link>
        <Link to="/">
          <Button type="primary">返回</Button>
        </Link>
      </div>
      {props.children}
    </div>
  );
}

export default BasicLayout;

import React from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import { connect } from 'dva';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import styles from './index.less';

const ReactGridLayout = WidthProvider(RGL);

class NoCompactingLayout extends React.PureComponent {
  static defaultProps = {
    className: 'layout',
    // items: 50,
    cols: 1000,
    rowHeight: 1,
    onLayoutChange: function() {},
    // This turns off compaction so you can place items wherever.
    compactType: null,
    margin: [0, 0],
  };

  constructor(props) {
    super(props);
    const layout = [
      {
        x: 200,
        y: 0,
        w: 600,
        h: 500,
        i: 'i',
      },
    ];
    this.state = { layout };
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    const { children } = this.props;
    const { pathname } = window.location;
    if (pathname === '/CoronavirusAdd') {
      return <div>{children || <div>No Children</div>}</div>;
    }
    return (
      <ReactGridLayout
        layout={this.state.layout}
        onLayoutChange={this.onLayoutChange}
        {...this.props}
      >
        <div key="i" className={styles.item}>
          {children || <div>No Children</div>}
        </div>
      </ReactGridLayout>
    );
  }
}

export default NoCompactingLayout;

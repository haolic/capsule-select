import React from 'react';
import RGL, { WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import styles from './index.less';

const ReactGridLayout = WidthProvider(RGL);

export default class NoCompactingLayout extends React.PureComponent {
  static defaultProps = {
    className: 'layout',
    items: 50,
    cols: 12,
    rowHeight: 30,
    onLayoutChange: function() {},
    // This turns off compaction so you can place items wherever.
    verticalCompact: false,
  };

  constructor(props) {
    super(props);

    const layout = [{ x: 0, y: 0, w: 12, h: 12, i: 'i' }];
    this.state = { layout };
  }

  onLayoutChange(layout) {
    this.props.onLayoutChange(layout);
  }

  render() {
    const { children } = this.props;
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

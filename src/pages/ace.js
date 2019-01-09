import React from "react";
import AceEditor from 'react-ace';
import 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';
import './ace.less';

class Ace extends React.Component {
  tid;
  state = {
    aceValue: 'const a = 1;',
  };
  onChange = newValue => {
    // console.log('change', newValue);
    this.setState({
      aceValue: newValue,
    });
    if (this.tid) {
      clearTimeout(this.tid);
    }
    this.tid = setTimeout(() => {
      try {
        new Function(newValue)();
      } catch (e) {
        console.error(e);
      }
    }, 1000);
  };
  render() {
    return (
      <div className="ace-editor-wrap">
        <div className="outter">
          <AceEditor
            value={this.state.aceValue}
            mode="javascript"
            theme="monokai"
            onChange={this.onChange}
            name="UNIQUE_ID_OF_DIV"
            editorProps={{ $blockScrolling: true }}
          />
        </div>
      </div>
    );
  }
}
export default Ace;

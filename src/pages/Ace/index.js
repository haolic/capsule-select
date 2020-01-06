import React from 'react';
import AceEditor from 'react-ace';
import 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

class Ace extends React.Component {
  tid;
  inputFunction = function() {};
  state = {
    inputData: '',
    aceValue: `
      console.log(data);
      return data;
    `,
    outputData: '',
  };
  componentDidMount() {
    this.do(this.state.aceValue);
  }
  dataChange = dataValue => {
    // dataValue;
  };
  do = functionData => {
    this.setState({
      aceValue: functionData,
    });
    if (this.tid) {
      clearTimeout(this.tid);
    }
    this.tid = setTimeout(() => {
      try {
        const Fun = Function;
        this.inputFunction = new Fun(this.state.inputData, functionData);
        console.log(this.inputFunction);
      } catch (e) {
        console.error(e);
      }
    }, 1000);
  };
  render() {
    const commonProps = {
      mode: 'javascript',
      theme: 'monokai',
      fontSize: 14,
    };
    return (
      <div className="ace-editor-wrap">
        <div className="outter">
          <div>
            <AceEditor
              value={this.state.inputData}
              {...commonProps}
              onChange={this.dataChange}
              name="aceInput"
            />
          </div>
          <div>
            <AceEditor
              value={this.state.aceValue}
              {...commonProps}
              onChange={this.onChange}
              name="aceFunc"
            />
          </div>
          <div>
            <AceEditor
              value={this.state.outputData}
              {...commonProps}
              name="aceOutput"
              readOnly={true}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Ace;

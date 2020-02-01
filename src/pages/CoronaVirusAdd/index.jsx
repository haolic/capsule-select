import React, { useEffect } from 'react';
import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';

const CoronavirusAdd = props => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const { getFieldDecorator } = props.form;
  return (
    <div>
      <Form {...formItemLayout}>
        <Form.Item label="日期">
          {getFieldDecorator('date', {
            rules: [],
          })(<Input autoComplete="off" />)}
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form.create()(CoronavirusAdd);

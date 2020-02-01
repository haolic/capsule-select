import React from 'react';
import { Form, Input, DatePicker, Button, Popconfirm } from 'antd';
import moment from 'moment';
import { insertVirusData } from '../../service/coronavirus';

const CoronavirusAdd = props => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18 },
    },
  };
  const submit = isDelete => {
    props.form.validateFields((err, values) => {
      if (!err) {
        if (isDelete) {
          const params = {
            date: values.date.format('YYYY-MM-DD'),
            value: null,
          };
          insertVirusData(params);
          return;
        }
        const params = {
          date: values.date.format('YYYY-MM-DD'),
          value: values.value.toString(),
          died: values.died.toString(),
          cure: values.cure.toString(),
        };
        insertVirusData(params);
      }
    });
  };
  const { getFieldDecorator } = props.form;
  return (
    <div
      style={{
        width: '40%',
        margin: '0 auto',
        textAlign: 'left',
        fontFamily: 'Courier New',
      }}
    >
      <Form {...formItemLayout}>
        <Form.Item label="日期">
          {getFieldDecorator('date', {
            initialValue: moment(),
          })(<DatePicker allowClear={false} />)}
        </Form.Item>
        <Form.Item label="截止当日值">
          {getFieldDecorator('value', {
            initialValue: 0,
          })(<Input type="number" placeholder="请输入当日值" />)}
        </Form.Item>
        <Form.Item label="累计死亡">
          {getFieldDecorator('died', {
            initialValue: 0,
          })(<Input type="number" placeholder="请输入累计死亡人数" />)}
        </Form.Item>
        <Form.Item label="累计治愈">
          {getFieldDecorator('cure', {
            initialValue: 0,
          })(<Input type="number" placeholder="请输入累计治愈人数" />)}
        </Form.Item>
      </Form>
      <div
        style={{
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <Button type="primary" onClick={() => submit()}>
          提交
        </Button>
        <Popconfirm
          title="确定删除?"
          onConfirm={() => submit('delete')}
          // onCancel={cancel}
          okText="确定"
          cancelText="取消"
        >
          <Button type="danger">
            删除当天数据
          </Button>
        </Popconfirm>
      </div>
    </div>
  );
};

export default Form.create()(CoronavirusAdd);

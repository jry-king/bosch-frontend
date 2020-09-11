import React from 'react';
import logo from './logo.svg';
import pt from './powertool.jpg';
import './App.css';
import { Form, Input, Checkbox, Button, Menu } from 'antd'; 
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import WrappedLogin from "./Login.jsx";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Demo = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
}

function App() {
  return (
    <div className="App">
      <Menu mode="horizontal">
        <Menu.Item key="registration">
          注册
        </Menu.Item>
        <Menu.Item key="profile">
          个人资料
        </Menu.Item>
        <Menu.Item key="pay">
          打赏
        </Menu.Item>
      </Menu>
      <header className="App-header">
        <img src={pt} className="App-logo" alt="logo" />
        <p>博世电动工具员工打赏系统</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary">注册</Button>
        <p></p>
        <Button type="primary">登录</Button>
      </header>
    
      <Form {...layout} name="basic" initialValues={{ remember: true }} /*onFinish={onFinish} onFinishFailed={onFinishFailed}*/>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;

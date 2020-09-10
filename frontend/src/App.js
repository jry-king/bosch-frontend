import React from 'react';
import logo from './logo.svg';
import pt from './powertool.jpg';
import './App.css';
import { Button, Menu } from 'antd'; 

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
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import HeaderCustom from './components/HeaderCustom';
import { Layout, Menu } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';

const { Footer, Sider, Content } = Layout;

function App() {
  const [collapsed, setCollapsed] = React.useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  
  const navigate = useNavigate();
  const handleMenu = (menu: any) => {
    console.log('menu', menu)
    navigate(menu.key)
  }

  return (
    <Layout hasSider className="app-container">
    <Sider
      className="sider-container"
      collapsible
      trigger={null}
      collapsed={collapsed}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']} onClick={handleMenu}>
        <Menu.Item key="dashboard">
          dashbord
        </Menu.Item>
        <Menu.Item key="2">
          nav 2
        </Menu.Item>
        <Menu.Item key="3">
          nav 3
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout">
      <HeaderCustom collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
      <Content style={{ margin: '90px 16px 0', overflow: 'initial' }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
  );
}

export default App;

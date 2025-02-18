import React, { useState } from 'react';
import logo from '../../assets/images/yenilogo.png';
import { MenuOutlined } from '@ant-design/icons';
import { Drawer, Button, Row, Col, Menu } from 'antd';

function AppHeader() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <header style={{ backgroundColor: '#1a1a1a', padding: '10px 20px' }}>
      <Row align="middle" justify="space-between">
        <Col>
          <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <a href='/'><img src={logo}  alt="Logo" style={{ height: '50px' }} /></a>
          </div>
        </Col>
        <Col xs={0} sm={0} md={0} lg={18} xl={18}>
          <Menu mode="horizontal" theme="dark" style={{ justifyContent: 'flex-end', background: '#1a1a1a' }}>
            <Menu.Item key="home">
              <a href="/">Anasayfa</a>
            </Menu.Item>
            <Menu.Item key="about">
              <a href="/about">Hakkımızda</a>
            </Menu.Item>
            <Menu.Item key="services">
              <a href="#feature">Hizmetlerimiz</a>
            </Menu.Item>
            <Menu.Item key="contact">
              <a href="#contact">İletişim</a>
            </Menu.Item>
          </Menu>
        </Col>
        <Col xs={24} sm={24} md={24} lg={0} xl={0}>
          <Button type="text" icon={<MenuOutlined />} onClick={showDrawer} style={{ color: 'white' }} />
        </Col>
      </Row>
      <Drawer
        title="Menü"
        placement="right"
        onClose={onClose}
        visible={visible}
        bodyStyle={{ padding: 0 }}
      >
        <Menu mode="vertical" theme="dark">
          <Menu.Item key="home">
            <a href="/">Anasayfa</a>
          </Menu.Item>
          <Menu.Item key="about">
            <a href="/about">Hakkımızda</a>
          </Menu.Item>
          <Menu.Item key="services">
            <a href="#feature">Hizmetlerimiz</a>
          </Menu.Item>
          <Menu.Item key="contact">
            <a href="#contact">İletişim</a>
          </Menu.Item>
        </Menu>
      </Drawer>
    </header>
  );
}

export default AppHeader;

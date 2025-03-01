import React from 'react';
import { Layout, Row, Col } from 'antd';
import AppHeader from '../components/common/AppHeader';
import CarouselComponent from '../components/Carousel';
import AppFooter from '../components/common/AppFooter';
import AppFeature from '../components/home/feature';
import AppWorks from '../components/home/works';
import AppContact from '../components/home/contact';
import './../AppStyle.css';


const { Content, Footer } = Layout;

const Home = () => {
  return (
    <Layout className="mainLayout" style={{ backgroundColor: "black" }}>
      <AppHeader />
      <Content>
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={24} sm={24} md={22} lg={20} xl={18}>
            <CarouselComponent />
          </Col>
        </Row>
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={24} sm={24} md={22} lg={20} xl={18}>
            <AppFeature />
          </Col>
        </Row>
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={24} sm={24} md={22} lg={20} xl={18}>
            <AppWorks />
          </Col>
        </Row>
        <Row justify="center" gutter={[16, 16]}>
          <Col xs={24} sm={24} md={22} lg={20} xl={18}>
            <AppContact />
          </Col>
        </Row>
      </Content>
      <Footer style={{ backgroundColor: "black" }}>
        <AppFooter />
      </Footer>
    </Layout>
  );
};

export default Home;

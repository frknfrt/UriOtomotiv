
import React from 'react';
import {  Layout  } from 'antd';
import AppHeader from '../components/common/AppHeader';
import CarouselComponent from '../components/Carousel';
import AppFooter from '../components/common/AppFooter';
import AppFeature from '../components/home/feature';
import AppWorks from '../components/home/works';
import AppContact from '../components/home/contact';
import './../AppStyle.css';

const {Content, Footer } = Layout;



const Home = () => {
  
  return (
 <Layout className='mainLayout' style={{backgroundColor:"black"}}>
<AppHeader></AppHeader>
        <Content>
    <CarouselComponent/>
    <AppFeature/>
    <AppWorks/>
    <AppContact/>
    </Content>
    <Footer style={{backgroundColor:"black"}}>
    <AppFooter></AppFooter>
    </Footer>
      </Layout>
  );
};
export default Home;

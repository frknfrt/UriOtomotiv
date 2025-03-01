import React from 'react';
import { Col, Layout, Row,Card } from 'antd';
import AppHeader from '../components/common/AppHeader';
import AppFooter from '../components/common/AppFooter';
import './../AppStyle.css';

const { Content, Footer } = Layout;

const ContactPage = () => {
  return (

    
    <Layout className="mainLayout">
    <AppHeader />
    <Content style={{ backgroundColor: '#121212'}}>

    <div  style={{ padding: '40px 20px', color: 'white' }}>
      <Row justify="center">
        <Col xs={24} md={20} lg={16}>
          <Card style={{ backgroundColor: '#1c1c1c', borderColor: '#333', padding: '20px' }}>
            <Row gutter={[32, 32]} justify="space-between" align="middle">
              {/* Sol Taraf - İletişim Bilgileri */}
              <Col xs={24} md={12} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="titleHolder" style={{ textAlign: 'left' }}>
                  <h2 style={{ color: '#ffffff' }}>İletişim Bilgileri</h2>
                  <p style={{ lineHeight: '1.8', fontSize: '16px', color: 'white' }}><strong>Adres:</strong> İkitelli OSB, Hırdavatçılar Sanayi Sitesi No:56, 34490 Başakşehir/İstanbul, Türkiye</p>
                  <p style={{ lineHeight: '1.8', fontSize: '16px', color: 'white' }}><strong>Telefon:</strong> +90 531-510-89-05</p>
                  <p style={{ lineHeight: '1.8', fontSize: '16px', color: 'white' }}><strong>E-posta:</strong> info@ornek.com</p>
                  <p style={{ lineHeight: '1.8', fontSize: '16px', color: 'white' }}><strong>Çalışma Saatleri:</strong> Pazartesi - Cuma, 08:00 - 17:00</p>
                </div>
              </Col>
              
              {/* Sağ Taraf - Google Harita */}
              <Col xs={24} md={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <iframe
                  title="Google Map"
                  className="w-full rounded-lg shadow-md"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d187.99899395609884!2d28.792759731149587!3d41.06934449938908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa59565a5da7f%3A0xd94b642f87676e97!2zw5xSxLAgT1RPTU9UxLBWIEZPUktMxLBGVCBMQVNUxLBLTEVSxLA!5e0!3m2!1sen!2sus!4v1740866276553!5m2!1sen!2sus"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ width: '100%', height: '400px' }}
                ></iframe>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  

   
    </Content>
    <Footer style={{ backgroundColor: "black" }}>
      <AppFooter />
    </Footer>
  </Layout>

  
  );
};

export default ContactPage;

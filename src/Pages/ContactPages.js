import React from 'react';
import { Col, Layout, Row } from 'antd';
import AppHeader from '../components/common/AppHeader';
import AppFooter from '../components/common/AppFooter';
import './../AppStyle.css';

const { Content, Footer } = Layout;

const ContactPage = () => {
  return (

    
    <Layout className="mainLayout" style={{ backgroundColor: "black" }}>
    <AppHeader />
    <Content>
      
          
    <div className="flex flex-col md:flex-row h-screen p-4">
      {/* Sol Taraf - İletişim Bilgileri */}
      <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md" style={{color:'white'}}>
        <h2 className="text-2xl font-bold mb-4">İletişim Bilgileri</h2>
        <p><strong>Adres:</strong> Örnek Mah. 123. Sok. No:45, İstanbul</p>
        <p><strong>Telefon:</strong> +90 555 123 45 67</p>
        <p><strong>E-posta:</strong> info@ornek.com</p>
        <p><strong>Çalışma Saatleri:</strong> Pazartesi - Cuma, 09:00 - 18:00</p>
      </div>

      {/* Sağ Taraf - Google Harita */}
      <div className="w-full md:w-1/2 mt-4 md:mt-0 md:ml-4">
        <iframe
          title="Google Map"
          className="w-full h-full rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.3485403697753!2d28.978378275511586!3d41.00823727131402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab99a2b8fbab5%3A0xf2c01e963a118e16!2sİstanbul!5e0!3m2!1str!2str!4v1700000000000"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

   
    </Content>
    <Footer style={{ backgroundColor: "black" }}>
      <AppFooter />
    </Footer>
  </Layout>

  
  );
};

export default ContactPage;

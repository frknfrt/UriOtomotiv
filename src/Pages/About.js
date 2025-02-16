import React from 'react';
import { Layout, Row, Col, Card } from 'antd';
import AppHeader from '../components/common/AppHeader';
import AppFooter from '../components/common/AppFooter';
import './../AppStyle.css';

const { Content, Footer } = Layout;

function AppAbout() {
  return (
    <Layout className="mainLayout" style={{ backgroundColor: "#1c1c1c" }}>
      <AppHeader />
      <Content>
        <div id="about" style={{ padding: '40px 20px', backgroundColor: '#121212', color: 'white' }}>
          <Row justify="center" gutter={[16, 16]}>
            <Col xs={24} md={20} lg={16}>
              <Card style={{ backgroundColor: '#1c1c1c', borderColor: '#333' }}>
                <div className="titleHolder" style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <h2 style={{ color: '#ffffff' }}>Hakkımızda</h2>
                </div>
                <p style={{ lineHeight: '1.8', fontSize: '16px', color: 'white' }}>
                  Firmamız, 20 yıldan fazla bir süredir forklift lastiği sektöründe güvenilir bir lider olarak faaliyet göstermektedir. Yüksek kaliteli ürünlerimiz ve müşteri odaklı hizmet anlayışımızla, sektördeki tüm ihtiyaçlara en uygun çözümleri sunmayı ilke edindik.
                </p>
                <p style={{ lineHeight: '1.8', fontSize: '16px', color: 'white' }}>
                  Başlangıçta küçük bir ekip ile çıktığımız bu yolculukta, her geçen yıl büyüyerek, sektördeki en önemli tedarikçilerden biri haline geldik. Bugüne kadar, binlerce işletmenin güvenli ve verimli forklift kullanımını sağlamalarına yardımcı olduk.
                </p>
              </Card>
            </Col>
          </Row>

          <Row justify="center" gutter={[16, 16]}>
            <Col xs={24} md={20} lg={16}>
              <Card style={{ backgroundColor: '#1c1c1c', borderColor: '#333' }}>
                <div className="titleHolder" style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <h2 style={{ color: '#ffffff' }}>Vizyonumuz ve Misyonumuz</h2>
                </div>
                <p style={{ lineHeight: '1.8', fontSize: '16px', color: 'white' }}>
                  Vizyonumuz, forklift lastiği sektöründe dünya çapında tanınan ve tercih edilen bir marka olmaktır. Müşterilerimize sunduğumuz kaliteli ürünler ve mükemmel hizmet ile her zaman sektörün öncü firmalarından biri olmayı hedefliyoruz.
                </p>
                <p style={{ lineHeight: '1.8', fontSize: '16px', color: 'white' }}>
                  Misyonumuz ise, forklift lastikleri ve aksesuarları konusunda işletmelerin güvenliğini, verimliliğini ve iş gücü maliyetlerini en aza indirgemek için her zaman en iyi çözümleri sunmak, iş ortaklarımızla güçlü ve uzun süreli ilişkiler kurmaktır.
                </p>
              </Card>
            </Col>
          </Row>

          <Row justify="center" gutter={[16, 16]}>
            <Col xs={24} md={20} lg={16}>
              <Card style={{ backgroundColor: '#1c1c1c', borderColor: '#333' }}>
                <div className="titleHolder" style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <h2 style={{ color: '#ffffff' }}>Ürünlerimiz ve Hizmetlerimiz</h2>
                </div>
                <p style={{ lineHeight: '1.8', fontSize: '16px', color: 'white' }}>
                  Geniş ürün yelpazemiz ile farklı endüstrilerde faaliyet gösteren işletmelere, çeşitli forklift markalarına uygun lastik çözümleri sunmaktayız. Öne çıkan ürünlerimiz arasında, ağır yük taşıma, iç ve dış mekan kullanımına uygun forklift lastikleri, lastik bakım hizmetleri ve özel üretim lastikler yer almaktadır.
                </p>
                <p style={{ lineHeight: '1.8', fontSize: '16px', color: 'white' }}>
                  Müşteri memnuniyeti bizim için her şeyden önce gelir. Bu yüzden, satış öncesi ve sonrası hizmetlerimizle müşterilerimizin her türlü ihtiyacına cevap vermekteyiz. Aynı zamanda, uzman ekibimizle lastik montajı, bakımı ve değişimi gibi hizmetleri de sunarak, forkliftlerinizi en verimli şekilde kullanmanızı sağlıyoruz.
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ backgroundColor: "#121212", color: 'white' }}>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default AppAbout;

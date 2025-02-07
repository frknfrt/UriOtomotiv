import React from 'react';
import {  Layout  } from 'antd';
import AppHeader from '../components/common/AppHeader';
import AppFooter from '../components/common/AppFooter';
import './../AppStyle.css'

const {Content, Footer } = Layout;


function AppAbout() {
  return (
    <Layout className='mainLayout' style={{backgroundColor:"black"}}>
    <AppHeader></AppHeader>
            <Content>
            <div id="about">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Hakkımızda</h2>
        </div>
        <div className="contentHolder" style={{color:'white'}}>
          <p> Firmamız, 20 yıldan fazla bir süredir forklift lastiği sektöründe güvenilir bir lider olarak faaliyet göstermektedir. Yüksek kaliteli ürünlerimiz ve müşteri odaklı hizmet anlayışımızla, sektördeki tüm ihtiyaçlara en uygun çözümleri sunmayı ilke edindik.

Başlangıçta küçük bir ekip ile çıktığımız bu yolculukta, her geçen yıl büyüyerek, sektördeki en önemli tedarikçilerden biri haline geldik. Bugüne kadar, binlerce işletmenin güvenli ve verimli forklift kullanımını sağlamalarına yardımcı olduk. Forklift lastiği temini ve bakımı konusunda edindiğimiz geniş deneyim ve bilgi birikimimizle, müşterilerimize uzun ömürlü, dayanıklı ve güvenilir ürünler sunmaktayız. </p>
        </div>
        <div className="titleHolder">
          <h2>Vizyonumuz ve Misyonumuz</h2>
        </div>
        <div className="contentHolder" style={{color:'white'}}>
          <p> Vizyonumuz, forklift lastiği sektöründe dünya çapında tanınan ve tercih edilen bir marka olmaktır. Müşterilerimize sunduğumuz kaliteli ürünler ve mükemmel hizmet ile her zaman sektörün öncü firmalarından biri olmayı hedefliyoruz.

Misyonumuz ise, forklift lastikleri ve aksesuarları konusunda işletmelerin güvenliğini, verimliliğini ve iş gücü maliyetlerini en aza indirgemek için her zaman en iyi çözümleri sunmak, iş ortaklarımızla güçlü ve uzun süreli ilişkiler kurmaktır.. </p>
        </div>
        <div className="titleHolder">
          <h2>Ürünlerimiz ve Hizmetlerimiz</h2>
        </div>
        <div className="contentHolder" style={{color:'white'}}>
          <p> Geniş ürün yelpazemiz ile farklı endüstrilerde faaliyet gösteren işletmelere, çeşitli forklift markalarına uygun lastik çözümleri sunmaktayız. Öne çıkan ürünlerimiz arasında, ağır yük taşıma, iç ve dış mekan kullanımına uygun forklift lastikleri, lastik bakım hizmetleri ve özel üretim lastikler yer almaktadır.

Müşteri memnuniyeti bizim için her şeyden önce gelir. Bu yüzden, satış öncesi ve sonrası hizmetlerimizle müşterilerimizin her türlü ihtiyacına cevap vermekteyiz. Aynı zamanda, uzman ekibimizle lastik montajı, bakımı ve değişimi gibi hizmetleri de sunarak, forkliftlerinizi en verimli şekilde kullanmanızı sağlıyoruz.</p>
        </div>


      </div>
    </div>
        </Content>
       <Footer style={{backgroundColor:"black"}}>
        <AppFooter></AppFooter>
       </Footer>
          </Layout>

  );
}

export default AppAbout;
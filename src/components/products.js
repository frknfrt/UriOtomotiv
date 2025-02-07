import React,{ useState } from 'react';
import { useParams } from 'react-router-dom';
import AppHeader from './common/AppHeader'
import AppFooter from './common/AppFooter';
import { AppstoreOutlined, MailOutlined, SettingOutlined,ShoppingCartOutlined  } from '@ant-design/icons';
import { Layout,Menu,Col,Row,Button,Card} from 'antd';
import './../AppStyle.css';
import {products} from'./productList'
import { NavMenuItems } from './NavMenuItems';
const { Header, Content, Footer } = Layout;




const Products = ()=> {
  const { width,ratio,diameter} = useParams();
  const [current, setCurrent] = useState('1');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };


    return (
      <Layout className="mainLayout">
        <Header>
          <AppHeader/>
        </Header>
        <Content>
        <Row>
      <Col span={4}>    
       <Menu
        theme="dark"
        onClick={onClick}
        style={{
          width: 256,
          marginTop:50
        }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={NavMenuItems}
      /></Col>
      <Col span={20} style={{ marginTop:50}}>
      <div style={{ padding: '20px' }}>
      <Row gutter={[16, 16]}>
        {products.map((product) => (
          <Col span={6} key={product.id}>
            <Card
              hoverable
              cover={<img alt={product.name} src={product.image} />}
            >
              <Card.Meta title={product.name} description={product.description} />
              <p style={{ fontWeight: 'bold', marginTop: '10px' }}>{product.price}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
      
      </Col>
    </Row>
   
        </Content>
        <Footer>
          <AppFooter/>  
        </Footer>      
      </Layout>
    );
  }
  
  export default Products;
  
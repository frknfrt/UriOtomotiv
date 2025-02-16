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
        <Col xs={24} sm={8} md={6} lg={4}>    
            <Menu
              theme="dark"
              onClick={onClick}
              style={{
                width: '100%',
                marginTop: 50,
              }}
              defaultOpenKeys={['sub1']}
              selectedKeys={[current]}
              mode="inline"
              items={NavMenuItems}
            />
          </Col>
      <Col span={20} style={{ marginTop:50}}>
      <div style={{ padding: '20px'}}>
      <Row gutter={[16, 16]} justify="center">
        {products.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <Card
              hoverable
              cover={<img alt={product.name} src={product.image} />}
              style={{ borderRadius: '10px', overflow: 'hidden' }}
            >
              <Card.Meta title={product.name} description={product.description} />
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
  
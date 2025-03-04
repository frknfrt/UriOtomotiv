import React,{ useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppHeader from './common/AppHeader'
import AppFooter from './common/AppFooter';
import { Layout,Menu,Col,Row,Modal,Card} from 'antd';
import './../AppStyle.css';
import {products} from'./productList'
import { NavMenuItems } from './NavMenuItems';
const { Header, Content, Footer } = Layout;




const Products = ()=> {
  const { width} = useParams();
  const [current, setCurrent] = useState(width);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState(products);
  const [modalVisible, setModalVisible] = useState(false);
  const [closing, setClosing] = useState(false);

  const getProducts = (key)=>{
    const selected=products.filter(x=>x.key==key);
    setSelectedProducts(selected);
  }
  const handleCloseModal = () => {
    setClosing(true); // Kapanış animasyonunu başlat
    setTimeout(() => {
      setClosing(false); // Animasyon bittikten sonra sıfırla
      setSelectedProduct(null); // Seçili lastiği sıfırla
    }, 300); // 300ms sonra modal tamamen kapanacak
  };

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    getProducts(e.key);
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
    setClosing(false);
  };

  useEffect(() => {
    if (width) {
      setCurrent(width);
      getProducts(width);
    }
  }, [width]);
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
      <Row gutter={[16, 16]} justify="start">
        {selectedProducts.map((product) => (
          <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
            <Card
              hoverable
              cover={<img alt={product.name} src={product.image} />}
              style={{ borderRadius: '10px', overflow: 'hidden' }}
              onClick={() => handleOpenModal(product)}
            >
              <Card.Meta title={product.name} description={product.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
      
      </Col>
    </Row>
    {selectedProduct && (
  <Modal
    title={selectedProduct.name}
    open={true}
    onCancel={handleCloseModal}
    footer={null}
    className={closing ? "closing-animation" : ""}
  >
    <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image"/>
    <p style={{ marginTop: "16px" }}>{selectedProduct.description}</p>
  </Modal>
)}
   
        </Content>
        <Footer>
          <AppFooter/>  
        </Footer>      
      </Layout>
    );
  }
  
  export default Products;
  
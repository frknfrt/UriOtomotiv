import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AppHeader from './common/AppHeader';
import AppFooter from './common/AppFooter';
import { Layout, Menu, Col, Row, Modal, Card } from 'antd';
import './../AppStyle.css';
import { products } from './productList';
import { NavMenuItems } from './NavMenuItems';

const { Header, Content, Footer } = Layout;

const Products = () => {
  const { width } = useParams();
  const [current, setCurrent] = useState(width);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedProducts, setSelectedProducts] = useState(products);
  const [modalVisible, setModalVisible] = useState(false);
  const [closing, setClosing] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState([]);

  // Güncellenmiş filtreleme fonksiyonu
  const getProducts = (keys) => {
    if (keys.length === 0) {
      setSelectedProducts(products); // Hiçbir filtre seçili değilse tüm ürünleri göster
    } else {
      const filteredProducts = products.filter(
        (product) => keys.includes(product.key) || keys.includes(product.type)
      );
      setSelectedProducts(filteredProducts);
    }
  };

  const handleCloseModal = () => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setSelectedProduct(null);
    }, 300);
  };

  const handleSelect = ({ key }) => {
    let updatedKeys = selectedKeys.includes(key)
      ? selectedKeys.filter((k) => k !== key) // Eğer zaten seçiliyse kaldır
      : [...selectedKeys, key]; // Yoksa ekle

    setSelectedKeys(updatedKeys);
    getProducts(updatedKeys); // Yeni seçili anahtarlarla filtreleme yap
  };

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
    setClosing(false);
  };

  useEffect(() => {
    if (width) {
      setCurrent(width);
      setSelectedKeys([width]); // URL'den gelen key'i seçili hale getir
      getProducts([width]); // İlk yüklemede filtreleme yap
    }
  }, [width]);

  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Row>
          <Col xs={24} sm={8} md={6} lg={4}>
            <Menu
              selectedKeys={selectedKeys}
              onSelect={handleSelect}
              onDeselect={handleSelect}
              theme="dark"
              style={{ width: '100%', marginTop: 50 }}
              defaultOpenKeys={['sub1']}
              mode="inline"
              items={NavMenuItems}
            />
          </Col>
          <Col span={20} style={{ marginTop: 50 }}>
            <div style={{ padding: '20px' }}>
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
            className={closing ? 'closing-animation' : ''}
          >
            <img src={selectedProduct.image} alt={selectedProduct.name} className="modal-image" />
            <p style={{ marginTop: '16px' }}>{selectedProduct.description}</p>
          </Modal>
        )}
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
};

export default Products;

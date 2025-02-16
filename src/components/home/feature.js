import React from 'react';

import image1 from '../../assets/images/lastik-1.png';
import image3 from '../../assets/images/lastik-1.png';
import image5 from '../../assets/images/lastik-1.png';
import image2 from '../../assets/images/lastik2.png';
import image4 from '../../assets/images/lastik2.png';
import image6 from '../../assets/images/lastik2.png';

import { Row, Col } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

function AppFeature() {
  return (
    <div id="feature" className="block featureBlock bgGray">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Kampanyalı Ürünler</h2>
        </div>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Modern Design" src={image1} />}
            >
              <Meta title="Modern Design" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image2} />}
            >
              <Meta title="Beyaz İz Bırakmayan Dolgu Sekmanlı Forklift Lastiği" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image3} />}
            >
              <Meta title="Beyaz İz Bırakmayan Dolgu Sekmanlı Forklift Lastiği" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image4} />}
            >
              <Meta title="Mfs101 Sekmanlı Dolgu Forklift Lastiği" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image5} />}
            >
              <Meta title="Beyaz İz Bırakmayan Dolgu Sekmanlı Forklift Lastiği" />
            </Card>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              cover={<img alt="Test" src={image6} />}
            >
              <Meta title="Mfs101 Sekmanlı Dolgu Forklift Lastiği" />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;
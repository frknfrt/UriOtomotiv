import React from 'react';
import '../../AppStyle.css';

import image1 from '../../assets/images/1.png';
import image3 from '../../assets/images/yeni1.png';
import image5 from '../../assets/images/yeni2.png';
import image2 from '../../assets/images/4.png';
import image4 from '../../assets/images/3.png';
import image6 from '../../assets/images/5.png';

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
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card hoverable cover={<img alt="Forklift Lastik" src={image1} />}>
              <Meta title="Forklift Lastik" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card hoverable cover={<img alt="Forklift Lastik" src={image2} />}>
              <Meta title="Forklift Lastik" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card hoverable cover={<img alt="Forklift Lastik" src={image3} />}>
              <Meta title="Forklift Lastik" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card hoverable cover={<img alt="Forklift Lastik" src={image4} />}>
              <Meta title="Forklift Lastik" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card hoverable cover={<img alt="Forklift Lastik" src={image5} />}>
              <Meta title="Forklift Lastik" />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card hoverable cover={<img alt="Forklift Lastik" src={image6} />}>
              <Meta title="Forklift Lastik" />
            </Card>1
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppFeature;

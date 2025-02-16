import React, { useState } from 'react';
import tireImg from '../assets/images/tire-sizes.png';
import { Card, Row, Col, Select, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const TireSize = () => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(155);
  const [ratio, setRatio] = useState(45);
  const [diameter, setDiameter] = useState(13);

  const handleChange = (value, option) => {
    if (option["data-info"] === "width") setWidth(option["value"]);
    if (option["data-info"] === "ratio") setRatio(option["value"]);
    if (option["data-info"] === "diameter") setDiameter(option["value"]);
  };

  const getTires = (width, ratio, diameter) => {
    navigate(`/products/${width}/${ratio}/${diameter}`);
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      padding: '16px',
      backgroundColor: 'black',
    },
    card: {
      width: '100%',
      maxWidth: '400px',
      backgroundColor: 'black',
      borderRadius: '8px',
      overflow: 'hidden',
      color: 'white',
    },
    image: {
      width: '100%',
      height: 'auto',
      objectFit: 'cover',
    },
    row: {
      marginTop: '16px',
    },
    label: {
      marginBottom: '8px',
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    select: {
      width: '100%',
    },
    buttonRow: {
      marginTop: '16px',
    },
    button: {
      width: '100%',
      backgroundColor: '#1890ff',
      color: 'white',
      border: 'none',
    },
    buttonHover: {
      backgroundColor: '#40a9ff',
    },
  };

  return (
    <div style={styles.container}>
      <Card
        hoverable
        style={styles.card}
        cover={<img alt="Tire Sizes" src={tireImg} style={styles.image} />}
      >
        <Row gutter={[16, 16]} style={styles.row}>
          <Col xs={24} sm={8}>
            <div style={styles.label}>Genişlik</div>
            <Select
              id="width"
              style={styles.select}
              defaultValue="155"
              onChange={handleChange}
            >
              <Option value="155" data-info="width">155</Option>
              <Option value="175" data-info="width">175</Option>
              <Option value="185" data-info="width">185</Option>
            </Select>
          </Col>
          <Col xs={24} sm={8}>
            <div style={styles.label}>Oran</div>
            <Select
              id="ratio"
              style={styles.select}
              defaultValue="45"
              onChange={handleChange}
            >
              <Option value="45" data-info="ratio">45</Option>
              <Option value="50" data-info="ratio">50</Option>
              <Option value="55" data-info="ratio">55</Option>
            </Select>
          </Col>
          <Col xs={24} sm={8}>
            <div style={styles.label}>Jant Çapı</div>
            <Select
              id="diameter"
              style={styles.select}
              defaultValue="13"
              onChange={handleChange}
            >
              <Option value="13" data-info="diameter">13</Option>
              <Option value="14" data-info="diameter">14</Option>
              <Option value="15" data-info="diameter">15</Option>
            </Select>
          </Col>
        </Row>
        <Row justify="center" style={styles.buttonRow}>
          <Button style={styles.button} onClick={() => getTires(width, ratio, diameter)}>
            Lastikleri Görüntüle
          </Button>
        </Row>
      </Card>
    </div>
  );
};

export default TireSize;

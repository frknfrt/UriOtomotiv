import React, { useState } from 'react';
import tireImg from '../assets/images/TİRE.png';
import { Card, Row, Col, Select, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Option } = Select;

const TireSize = () => {
  const navigate = useNavigate();
  const [width, setWidth] = useState(155);
  const selectBoxValues=["18x7-8", "21x8-9","23x9-10","23x10-12","27x10-12", "28x9-15","250-15","300-15","400-8","500-8","600-9","650-10","700-12", "700-15","750-10","750-15","750-16","825-25","900-20","1000-20","1100-20","1200-20"]


  const handleChange = (value, option) => {
    if (option["data-info"] === "width") setWidth(option["value"]);

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
          <Col xs={24} sm={24}>
            <div style={styles.label}>Lastik Ebatı</div>
            <Select
              id="width"
              style={styles.select}
              defaultValue="18x7-8"
              onChange={handleChange}
            >
              {
               selectBoxValues.map(item=>{
             return(
                <Option value={item} data-info="width">{item}</Option>)
               }) 
              }
            </Select>
          </Col>
        </Row>
        <Row justify="center" style={styles.buttonRow}>
          <Button style={styles.button} onClick={() => getTires(width)}>
            Lastikleri Görüntüle
          </Button>
        </Row>
      </Card>
    </div>
  );
};

export default TireSize;

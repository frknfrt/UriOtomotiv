import React, { useState } from 'react';
import tireImg from '../assets/images/tire-sizes.png'
import {Card, Row, Col, Select, Button} from 'antd';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;
const { Option } = Select;


const TireSize  = () => {
    const navigate = useNavigate();
    const [width,setWidth]=useState(155);
    const [ratio,setRatio]=useState(45);
    const [diameter,setDiameter]=useState(13);
const handleChange = (value,option) => {
   if(option["data-info"] == "width"){setWidth(option["value"])};
  if(option["data-info"] == "ratio"){setRatio(option["value"])};
  if(option["data-info"] == "diameter");{setDiameter(option["value"])};
};
    const getTires = (width,ratio,diameter)=>{
        navigate(`/products/${width}/${ratio}/${diameter}`);
    }
    return (
    <Card
        hoverable
        style={{ width: 300,backgroundColor:'black' }}
        cover={<img alt="tireSize" src={tireImg} />}
    >
        <Row >
            <Col span={8}>
                <div style={{color:"white"}}> Genişlik</div>
                <Select
                    id="width"
                    style={{backgroundColor:'black'}}
                    defaultValue="155"
                    onChange={handleChange}
                >

     <Option value="155" data-info="width">155</Option>
      <Option value="175" data-info="width">175</Option>
      <Option value="185" data-info="width">185</Option>
                    
                </Select>
            </Col>
            <Col span={8}>
                <div style={{color:"white"}}>Oran</div>
                <Select
                    id='ratio'
                    defaultValue="45"
                    onChange={handleChange}
                >
   <Option value="45" data-info="ratio">45</Option>
      <Option value="50" data-info="ratio">50</Option>
      <Option value="55" data-info="ratio">55</Option>

                </Select>
            </Col>
            <Col span={8}>
                <div style={{color:"white"}}>Jant Çapı</div>
                <Select
                     id='diameter'
                    defaultValue="13"
                    onChange={handleChange}
                >  <Option value="13" data-info="diameter">13</Option>
                <Option value="14" data-info="diameter">14</Option>
                <Option value="15" data-info="diameter">15</Option></Select>
            </Col>
        </Row>
        <Row>
            <Button style={{ marginTop:'8%',left:'15%'}} onClick={ ()=> getTires(width,ratio,diameter)}>
                Lastikleri Görüntüle
            </Button>
        </Row>
    </Card>
)

};

export default TireSize;
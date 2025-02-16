import React from 'react';

import { Form, Input, Button, Checkbox } from 'antd';
const { TextArea } = Input;


function AppContact() {

const onClick = (event) =>{
console.log("denemeeee",event.target)
}

const onFinish = (e) =>{
  let body=e.message;
  let subject=e.subject;
  window.location.href="mailto:uriotomotiv@gmail.com?subject="+subject+"&body="+body;
console.log(e);
}


  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Lütfen Formu Doldurarak İletişime Geçiniz</h2>
        </div>
        <Form
        onFinish={onFinish}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="fullname"
            rules={[
              { 
                required: true,
                message: 'Lütfen Ad Soyad Giriniz!' 
              }]
            }
          >
            <Input placeholder="Ad Soyad" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input placeholder="Email Adresi"/>
          </Form.Item>
          <Form.Item
            name="telephone"
          >
            <Input placeholder="Telefon No" />
          </Form.Item>
          <Form.Item
            name="subject"
          >
            <Input placeholder="Konu" />
          </Form.Item>
          <Form.Item
            name="message"
          >
            <TextArea placeholder="Mesajınız" />
          </Form.Item>
          <Form.Item>
            <Form.Item 
              name="remember" 
              valuePropName="checked"
              noStyle
              rules={[
                { validator:(_, value) => value ? Promise.resolve() : Promise.reject('Should accept agreement') },
              ]}
            >
              <Checkbox>I agree with terms and conditions.</Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button onClick={onClick} type="primary" htmlType="submit" className="login-form-button">
              Gönder
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>  
  );
}

export default AppContact;
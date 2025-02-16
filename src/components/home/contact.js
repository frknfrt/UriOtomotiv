import React from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
const { TextArea } = Input;

function AppContact() {
  const onFinish = (values) => {
    let body = values.message;
    let subject = values.subject;
    window.location.href = `mailto:uriotomotiv@gmail.com?subject=${subject}&body=${body}`;
    console.log(values);
  };

  return (
    <div id="contact" className="block contactBlock">
      <div className="container-fluid">
        <div className="titleHolder">
          <h2>Lütfen Formu Doldurarak İletişime Geçiniz</h2>
        </div>
        <Row justify="center">
          <Col xs={24} sm={24} md={18} lg={12}>
            <Form
              onFinish={onFinish}
              name="contact_form"
              className="contact-form"
              initialValues={{ remember: true }}
            >
              <Form.Item
                name="fullname"
                rules={[{ required: true, message: 'Lütfen Ad Soyad Giriniz!' }]}
              >
                <Input placeholder="Ad Soyad" />
              </Form.Item>

              <Form.Item
                name="subject"
                rules={[{ required: true, message: 'Lütfen Konu Giriniz!' }]}
              >
                <Input placeholder="Konu" />
              </Form.Item>

              <Form.Item
                name="message"
                rules={[{ required: true, message: 'Lütfen Mesajınızı Yazınız!' }]}
              >
                <TextArea rows={4} placeholder="Mesajınız" />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="contact-form-button">
                  Gönder
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AppContact;

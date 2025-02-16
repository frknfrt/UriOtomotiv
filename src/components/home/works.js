import React from 'react';
import { Button, Modal, Row, Col } from 'antd';

class AppWorks extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div id="works" className="block worksBlock">
        <div className="container-fluid">
          <div className="titleHolder">
            <h2>Biz kimiz?</h2>
          </div>
          <Row justify="center" align="middle" style={{ textAlign: 'center' }}>
            <Col xs={24} sm={24} md={12} lg={8}>
              <div className="contentHolder">
                <Button size="large" onClick={this.showModal}>
                  <i className="fas fa-play"></i>
                </Button>
              </div>
            </Col>
          </Row>
          <Modal
            title="Üri Otomotiv Tanıtım Videosu"
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
            destroyOnClose={true}
          >
            <iframe
              title="Üri Otomotiv"
              width="100%"
              height="350"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AppWorks;

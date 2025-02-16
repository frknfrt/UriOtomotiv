import React from 'react';

import { Button, Modal } from 'antd';

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
            <h2>Biz kimiz ?</h2>
          </div>
          <div className="contentHolder">
            <Button size="large" onClick={this.showModal}><i className="fas fa-play"></i></Button>
          </div>
          <Modal
            title="Üri Otomotiv Tanıtım Videosu"
            visible={this.state.visible}
            onCancel={this.handleCancel}
            footer={null}
            destroyOnClose = {true}
          >
            <iframe title="Üri Otomotiv " width="100%" height="350" src="https://www.youtube.com/embed/NO-_qtZD1DU?si=M3tuLO4JivLpk_je"></iframe>
          </Modal>
        </div>
      </div>
    );
  }
}

export default AppWorks;
import React from 'react';

import { FloatButton } from 'antd';
import { Color } from 'antd/es/color-picker';

function AppFooter() {
  return (
    <div className="container-fluid">
      <div className="footer">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://google.com">Üri Otomotiv</a>
        </div>
        <ul className="socials">
          <li><a href="https://www.facebook.com/profile.php?id=100063639656768&locale=fo_FO"><i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.instagram.com/uriotomotivforkliftlastikleri/"><i className="fab fa-instagram"></i></a></li>
        </ul>
        <div className="copyright">Copyright &copy; 2025
          <a href="https://frtdijitalpazarlama.com/Anasayfa/" style={{color:'white'}}> FRTDijitalPazarlama</a>
        </div>
        <FloatButton.BackTop>
          <div className="goTop"><i className="fas fa-arrow-circle-up"></i></div>
        </FloatButton.BackTop>
      </div>
    </div>
  );
}

export default AppFooter;
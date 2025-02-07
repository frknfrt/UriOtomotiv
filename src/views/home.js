import React from 'react';

import AppHero from '../components/home/hero';
import AppFeature from '../components/home/feature';
import AppWorks from '../components/home/works';
import AppContact from '../components/home/contact';

function AppHome() {
  return (
    <div className="main">
      <AppHero/>
      <AppFeature/>
      <AppWorks/>
      <AppContact/>
    </div>
  );
}

export default AppHome;
import React from 'react';
import Directory from '../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="homepage__title">
        <p>
          Find the most exciting
          <br /> <span className="homepage__title--sub">Tech Gadgets</span>
        </p>
      </div>
      <Directory />
    </div>
  );
};

export default HomePage;

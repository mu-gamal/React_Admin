import React from 'react';
import {CFooter} from '@coreui/react';
import packageJson from '../../package.json';

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="/" target="_blank" rel="noopener noreferrer">
          {packageJson.name}
        </a>
        <span className="ml-1">&copy; 2020.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="/" target="_blank" rel="noopener noreferrer">
          {packageJson.author}
        </a>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);

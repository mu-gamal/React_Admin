import React from 'react';
import {CCard, CCardBody, CCardHeader, CRow} from '@coreui/react';
import {flagSet} from '@coreui/icons';
import {getIconsView} from '../brands/Brands';

const Icons = () => {
  return (
    <CCard>
      <CCardHeader>Flag Icons / as CIcon</CCardHeader>
      <CCardBody>
        <CRow className="text-center">{getIconsView(flagSet)}</CRow>
      </CCardBody>
    </CCard>
  );
};

export default Icons;

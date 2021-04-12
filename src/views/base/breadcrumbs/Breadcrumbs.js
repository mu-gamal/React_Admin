import React from 'react';
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbRouter,
  CCard,
  CCardBody,
  CCardHeader,
  CLink,
  CCol,
  CRow
} from '@coreui/react';
import routes from '../../../routes';

const Breadcrumbs = () => {
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader>Breadcrumb</CCardHeader>
          <CCardBody>
            <h6>CBreadcrumbRouter wrapper component</h6>
            <CBreadcrumbRouter routes={routes} />
            <h6>Manual</h6>
            <CBreadcrumb>
              <CBreadcrumbItem>
                <CLink>Home</CLink>
              </CBreadcrumbItem>
              <CBreadcrumbItem active>Library</CBreadcrumbItem>
            </CBreadcrumb>
            <CBreadcrumb>
              <CBreadcrumbItem>
                <CLink>Home</CLink>
              </CBreadcrumbItem>
              <CBreadcrumbItem>
                <CLink>Library</CLink>
              </CBreadcrumbItem>
              <CBreadcrumbItem active>Data</CBreadcrumbItem>
            </CBreadcrumb>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Breadcrumbs;
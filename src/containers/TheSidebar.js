import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem
} from '@coreui/react';
import {toggleNav} from '../actions';
// sidebar nav config
import navigation from './_nav';

const logo = require('../assets/logo.png');

const TheSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.nav);

  return (
    <CSidebar show={show} onShowChange={(val) => dispatch(toggleNav(val))}>
      <CSidebarBrand className="d-md-down-none" to="/">
        <img src={logo} style={{height: 35}} alt="logo" />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);

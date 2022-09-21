import React from 'react';
import CompMenuCompany from './CompMenuCompany';
import CompMenuBiz from './CompMenuBiz';
import CompMenuPrd from './CompMenuPrd';
import CompMenuOnline from './CompMenuOnline';
import CompMenuCommunity from './CompMenuCommunity';

const CompMenu = () => {
  return (
    <ul>
      <CompMenuCompany/>
      <CompMenuBiz/>
      <CompMenuPrd/>
      <CompMenuOnline/>
      <CompMenuCommunity/>
    </ul>
  );
};

export default CompMenu;
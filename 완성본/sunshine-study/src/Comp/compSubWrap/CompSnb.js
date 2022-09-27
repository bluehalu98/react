import React, { useContext } from 'react';
import { AppContext } from '../../App';
import CompMenuBiz from '../compMenu/CompMenuBiz';
import CompMenuCommunity from '../compMenu/CompMenuCommunity';
import CompMenuCompany from '../compMenu/CompMenuCompany';
import CompMenuOnline from '../compMenu/CompMenuOnline';
import CompMenuPrd from '../compMenu/CompMenuPrd';

const CompSnb = () => {
  const {pathArr} = useContext(AppContext)
  let menuCategory = pathArr[1]
  return (
    <nav className='snb'>
      <ul>
        {(menuCategory==='company')&&<CompMenuCompany/>}
        {(menuCategory==='biz')&&<CompMenuBiz/>}
        {(menuCategory==='product')&&<CompMenuPrd/>}
        {(menuCategory==='online')&&<CompMenuOnline/>}
        {(menuCategory==='community')&&<CompMenuCommunity/>}
      </ul>
    </nav>
  );
};

export default CompSnb;
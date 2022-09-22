import React, { useContext } from 'react';
import { AppContext } from '../../App';
import CompSubVisualDiv1 from './CompSubVisualDiv1';
import CompSubVisualDiv2 from './CompSubVisualDiv2';
import CompSubVisualDiv3 from './CompSubVisualDiv3';
import CompSubVisualDiv4 from './CompSubVisualDiv4';
import CompSubVisualDiv5 from './CompSubVisualDiv5';

const CompSubVisual = () => {
  const {pathArr} = useContext(AppContext)
  let menuCategory = pathArr[1]
  return (
    <section className="sub-visual">
      {(menuCategory==='company')&&<CompSubVisualDiv1/>}
      {(menuCategory==='biz')&&<CompSubVisualDiv2/>}
      {(menuCategory==='product')&&<CompSubVisualDiv3/>}
      {(menuCategory==='online')&&<CompSubVisualDiv4/>}
      {(menuCategory==='community')&&<CompSubVisualDiv5/>}
    </section>      
  );
};

export default CompSubVisual;
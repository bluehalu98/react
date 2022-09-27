import React, { useContext } from 'react';
import { useEffect } from 'react';
import { AppContext } from '../../App';
import CompSubVisualDiv1 from './CompSubVisualDiv1';
import CompSubVisualDiv2 from './CompSubVisualDiv2';
import CompSubVisualDiv3 from './CompSubVisualDiv3';
import CompSubVisualDiv4 from './CompSubVisualDiv4';
import CompSubVisualDiv5 from './CompSubVisualDiv5';

const CompSubVisual = () => {
  const {pathArr} = useContext(AppContext)
  let menuCategory = pathArr[1]

  useEffect(()=>{
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/js/app_particle_star.js`;
    document.body.appendChild(script); 
    return(()=>{//사라질때 스크립트 지우기
      script.remove()
    })
  },[])
  return (
    <section className="sub-visual">
      {(menuCategory==='company')&&<CompSubVisualDiv1/>}
      {(menuCategory==='biz')&&<CompSubVisualDiv2/>}
      {(menuCategory==='product')&&<CompSubVisualDiv3/>}
      {(menuCategory==='online')&&<CompSubVisualDiv4/>}
      {(menuCategory==='community')&&<CompSubVisualDiv5/>}
      <figure id="particles-js"></figure>
    </section>      
  );
};

export default React.memo(CompSubVisual);
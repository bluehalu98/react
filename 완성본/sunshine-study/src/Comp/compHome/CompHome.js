import React, { useEffect } from 'react';
import CompHomeSection1 from './CompHomeSection1';
import CompHomeSection2 from './CompHomeSection2';
import CompHomeSection3 from './CompHomeSection3';
import CompHomeVisual from './CompHomeVisual';

const CompHome = () => {
  useEffect(()=>{
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/js/home.js`;
    document.body.appendChild(script); 
    return(()=>{
      script.remove()
    })
  },[])
  return (
    <>
      <CompHomeVisual/>
      <main className='home-content'>
        <CompHomeSection1/>
        <CompHomeSection2/>
        <CompHomeSection3/>
      </main>
    </>
  );
};

export default CompHome;
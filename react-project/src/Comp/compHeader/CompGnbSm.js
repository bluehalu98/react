import React from 'react';
import { useEffect } from 'react';
import CompMenu from '../compMenu/CompMenu';

const CompGnbSm = () => {
  useEffect(()=>{
    const script = document.createElement('script');
    script.src = `${process.env.PUBLIC_URL}/js/gnb-sm.js`;
    document.body.appendChild(script); 
    return(()=>{
      script.remove()
    })
  },[])
  return (
    <nav className='gnb gnb-sm'>
      <CompMenu/>
    </nav>
  );
};

export default CompGnbSm;
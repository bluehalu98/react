import React from 'react';
import { useEffect } from 'react';

const CompMbtn = () => {
  useEffect(()=>{
    const scriptMbtn = document.createElement('script');
    scriptMbtn.src = `${process.env.PUBLIC_URL}/js/mbtn.js`;
    document.body.appendChild(scriptMbtn); 
    return(()=>{//사라질때 스크립트 지우기
      scriptMbtn.remove()
    })
  },[])
  return (
    <button className='mbtn'>
      <i className="close fa-solid fa-xmark"></i>
      <i className="bar fa-solid fa-bars"></i>
    </button>
  );
};

export default CompMbtn;
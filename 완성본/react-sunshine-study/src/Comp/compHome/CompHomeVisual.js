import React, { useEffect } from 'react';

const CompHomeVisual = () => {{/* 슬라이드, 동영상, 애니메이션같은 setinterval, settimeout를 사용시 컴포넌트를 따로 사용해야한다 */}
  useEffect(()=>{
    const script1 = document.createElement('script');
    script1.src = `${process.env.PUBLIC_URL}/js/home-visual.js`;
    const script2 = document.createElement('script');
    script2.src = `${process.env.PUBLIC_URL}/js/app_particle_default.js`;
    let scriptArr = [script1,script2]
    
    scriptArr.forEach(v=>{
      document.body.appendChild(v); 
    })
    return(()=>{
      scriptArr.forEach(v=>{
        v.remove()
      })
    })
  },[])
  return (
    <section className="home-visual">
      <div id='particles-js'></div>
      <div className='carousel-3d'>
        <ul className='polygon3d'>
          <li><img src={`${process.env.PUBLIC_URL}/img/sub3/1.jpg`} alt="" /></li>
          <li><img src={`${process.env.PUBLIC_URL}/img/sub3/2.jpg`} alt="" /></li>
          <li><img src={`${process.env.PUBLIC_URL}/img/sub3/3.jpg`} alt="" /></li>
          <li><img src={`${process.env.PUBLIC_URL}/img/sub3/4.jpg`} alt="" /></li>
          <li><img src={`${process.env.PUBLIC_URL}/img/sub3/5.jpg`} alt="" /></li>
          <li><img src={`${process.env.PUBLIC_URL}/img/sub3/6.jpg`} alt="" /></li>
          <li><img src={`${process.env.PUBLIC_URL}/img/sub3/7.jpg`} alt="" /></li>
          <li><img src={`${process.env.PUBLIC_URL}/img/sub3/8.jpg`} alt="" /></li>
        </ul>
        <div className='indicator'>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
          <button></button>
        </div>
        <button className='prev'><i className="fa-solid fa-arrow-left"></i></button>
        <button className='next'><i className="fa-solid fa-arrow-right"></i></button>
      </div>
    </section>
  );
};

export default React.memo(CompHomeVisual);
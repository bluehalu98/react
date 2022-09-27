import React from 'react';

const CompVisual = () => {
  return (
    <figure>
    <img src={`${process.env.PUBLIC_URL}/img/sub1/about-01.jpg`} alt="" />
    <div></div> 
    <svg>{/* background가 없어야 적용 */}
      <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="
        1 0 0 0 0
        0 1 0 0 0
        0 0 1 0 0
        0 0 0 20 -10" result="goo" />
      <feBlend in="SourceGraphic" in2="goo" />
      </filter>
    </svg>
  </figure>
  );
};

export default React.memo(CompVisual);
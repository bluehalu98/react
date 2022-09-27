import React from 'react';
import CompMap from './CompMap';

const CompLocation = () => {
  return (
    <>      
      <h2 className='sub-title'>오시는 길</h2>
      <section className='section-location'>
        <dl>
          <dt>오시는 길</dt>
          <dd>부산광역시 해운대구 좌동 113-111</dd>
          <dt>전화번호</dt>
          <dd>070-7155-1979</dd>
          <dt>팩스번호</dt>
          <dd>02-2139-1142</dd>
        </dl>
        <CompMap/>
      </section>
    </>
  );
};

export default CompLocation;
import React from 'react';
import { Outlet } from 'react-router-dom';

const CompSubWrap = () => {
  return (
    <>
      <section className="sub-visual">
        서브비주얼
      </section>      
      <aside className='sub-sidebar'>
        사이드바...
      </aside>
      <main className='sub-content'>
        <Outlet/>{/* 중첩라우팅 */}
      </main>
    </>
  );
};

export default CompSubWrap;
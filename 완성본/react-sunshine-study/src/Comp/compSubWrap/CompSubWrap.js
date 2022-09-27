import React from 'react';
import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AppContext } from '../../App';
import CompSubSnb from './CompSnb';
import CompSubVisual from './CompSubVisual';

const CompSubWrap = () => {
  const {pathArr} = useContext(AppContext)
  return (
    <>
      <CompSubVisual/>
      <CompSubSnb/>
      <main className='sub-content'>
        <Outlet/>{/* 중첩라우팅 */}
      </main>
    </>
  );
};

export default CompSubWrap;
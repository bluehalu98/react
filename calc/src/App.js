import React, { createContext, useEffect, useState } from 'react';
import CompError from './comp/CompError';
import CompInput from './comp/CompInput';
import CompOutput from './comp/CompOutput';
import CompOutputMsg from './comp/CompOutputMsg';
import CompPreloader from './comp/CompPreloader';
import CompTitle from './comp/CompTitle';
export const AppContext=createContext()

const App = () => {
  const [_str,_setStr] = useState('')
  const [_showE,_setShowE] = useState(false)
  const [_showS,_setShowS] = useState(false)
  const [_showLoader,_setShowLoader] = useState(true)
  useEffect(()=>{
    setTimeout(() => {
      document.querySelector('.preloader').classList.add('active')
    }, 500);
    document.querySelector('.preloader').addEventListener('transitionend',()=>{
      _setShowLoader(false)
    })
  },[])
  return (
    <AppContext.Provider value={{_str, _setStr,_setShowE,_setShowS}}>
      <main className='app'>
        <img className='bg-app' src={`${process.env.PUBLIC_URL}/img/bg.png`} alt="" />{/* 리액트 절대경로 */}
        <CompTitle/>
        <CompOutput/>
        <CompInput/>
      </main>
      {(_showE)&&<CompError/>}
      {(_showS)&&<CompOutputMsg/>}
      {(_showLoader)&&<CompPreloader/>}
    </AppContext.Provider>
  );
};

export default App;
import React, { createContext, useState } from 'react';
import CompInput from './comp/CompInput';
import CompOutput from './comp/CompOutput';
import CompTitle from './comp/CompTitle';
export const AppContext=createContext()

const App = () => {
  const [_str,_setStr] = useState('')
  return (
    <AppContext.Provider value={{_str, _setStr}}>
      <main className='app'>
        <img className='bg-app' src={`${process.env.PUBLIC_URL}/img/bg.png`} alt="" />{/* 리액트 절대경로 */}
        <CompTitle/>
        <CompOutput/>
        <CompInput/>
      </main>
    </AppContext.Provider>
  );
};

export default App;
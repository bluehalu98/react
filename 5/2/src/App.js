import React, { createContext, useEffect, useState } from 'react';
import CompMenu from './CompMenu';
import CompMinus from './CompMinus';
import CompPlus from './CompPlus';
import CompResult from './CompResult';
export const AppContext = createContext();

const App = () => {
  const [_stage,_setStage] = useState('plus')
  const [_num1,_setNum1] = useState(0)
  const [_num2,_setNum2] = useState(0)
  const [_point,_setPoint] = useState(0)
  const [_userNum,_setUserNum] = useState('')
  useEffect(()=>{
    document.getElementById('root').classList.add('active')
  },[])
  
  return (
    <AppContext.Provider value={{_stage,_setStage,_num1,_setNum1,_num2,_setNum2,_point,_userNum,_setUserNum}}>
      <CompMenu/>
      <hr />
      {(_stage==='plus')?<CompPlus/>:<CompMinus/>}
      <hr />
      <CompResult/>
    </AppContext.Provider>
  );
};

export default App;
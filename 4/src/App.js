import React, { createContext, useRef, useState } from 'react';
import CompDivide from './comp/CompDivide';
import CompMenu from './comp/CompMenu';
import CompMulti from './comp/CompMulti';
import CompResult from './comp/CompResult';
import CompSub from './comp/CompSub';
import CompSum from './comp/CompSum';

export const AppContext = createContext()
const App = () => {
  const [_stage,_setStage] = useState('menu')
  const [_num1,_setNum1] = useState(0) 
  const [_num2,_setNum2] = useState(0) 
  const [_result,_setResult] = useState('')
  const [_point,_setPoint] = useState(0)
  const refInput = useRef()
  return (
    <AppContext.Provider value={{_stage, _setStage, _num1, _setNum1, _num2, _setNum2, _result, _setResult, _point, _setPoint, refInput}}>
      {(_stage==='menu')&&<CompMenu/>}
      {(_stage==='sum')&&<CompSum
        _num1={_num1}
        _num2={_num2}
      />}
      {(_stage==='sub')&&<CompSub
        _num1={_num1}
        _num2={_num2}
      />}
      {(_stage==='multi')&&<CompMulti
        _num1={_num1}
        _num2={_num2}
      />}
      {(_stage==='divide')&&<CompDivide
        _num1={_num1}
        _num2={_num2}
      />}
      {(_stage==='result')&&<CompResult
      />}
    </AppContext.Provider>
  );
};

export default App;
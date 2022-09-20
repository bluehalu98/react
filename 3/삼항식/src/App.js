import React, { useState } from 'react';
import CompQ from './comp/CompQ';
import CompResult from './comp/CompResult';

const App = () => {
  const [_num1,_setNum1] = useState(0)
  const [_num2,_setNum2] = useState(0)
  const [_stage, _setStage]  = useState('true')
  const [_result, _setResult] = useState('')
  const [_point, _setPoint] = useState(0)
  return (
    <>
      { 
        (_stage==='true')
        ? 
        <CompQ 
        _num1={_num1} 
        _setNum1={_setNum1} 
        _num2={_num2} 
        _setNum2={_setNum2} 
        _stage={_stage}
        _setStage={_setStage}
        _result={_result}
        _setResult={_setResult}
        _point={_point}
        _setPoint={_setPoint}
        />
        :
        <CompResult
        _stage={_stage}
        _setStage={_setStage}
        _result={_result}
        _setResult={_setResult}
        _point={_point}
        _setPoint={_setPoint}
        />
      }
    </>
  );
};

export default App;
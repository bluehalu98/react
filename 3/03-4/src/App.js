import React from 'react';
import { useState } from 'react';
import CompQuestion from './CompQuestion';
import CompResult from './CompResult';

const App = () => {
  let [_stage, _changeStage] = useState('question')
  let [_num1, _changeNum1] = useState(0)
  let [_num2, _changeNum2] = useState(0)
  let [_result, _changeResult]  = useState('?')
  let [_point, _changePoint]  = useState(0)

  return (
    <>
      {(_stage === 'question')
        ?
        <CompQuestion 
          _num1={_num1} 
          _num2={_num2} 
          _changeNum1={_changeNum1} 
          _changeNum2={_changeNum2}
          _changeStage={_changeStage}
          _changeResult={_changeResult}
          _changePoint={_changePoint}
          _point = {_point}
        />
        :
        <CompResult
          _result={_result}
          _point={_point}
          _changeStage={_changeStage}
        />
      }
    </>
  );
};

export default App;
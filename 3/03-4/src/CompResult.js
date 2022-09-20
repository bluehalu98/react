import React from 'react';

const CompResult = ({_result , _point,_changeStage}) => {
  const fnChangeStage = () => {
    _changeStage('question')
  }
  return (
    <div>
      {_result}입니다 
      <br />
      점수 : {_point}
      <button onClick={fnChangeStage}>문제화면으로</button>
    </div>
  );
};

export default CompResult;  
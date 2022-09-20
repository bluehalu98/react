import React from 'react';

const CompResult = ({_setStage,_result,_point}) => {
  const fnStage = () => {
    _setStage('start')
  }
  return (
    <>
      <p>{_result}</p>
      <p>총 {_point}점입니다!</p>
      <button onClick={fnStage}>처음화면으로</button>
    </>
  );
};

export default CompResult;
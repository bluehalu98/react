import React, { useContext } from 'react';
import { AppContext } from '../App';

const CompResult = () => {
  const {_setStage, _result} = useContext(AppContext)
  const fnMenu = () => {
    _setStage('menu')
  }
  return (
    <>
      {_result}
      <button onClick={fnMenu}>처음으로</button>
    </>
  );
};

export default CompResult;
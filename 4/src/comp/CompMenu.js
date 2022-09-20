import React, { useContext } from 'react';
import { AppContext } from '../App';

const CompMenu = () => {
  let {_setStage, _setNum1, _setNum2} = useContext(AppContext)
  const fnSetStage = (e)=> {
    _setStage(e.target.getAttribute('data-stage'))
    _setNum1(Math.ceil(Math.random()*9))
    _setNum2(Math.ceil(Math.random()*9))
  }
  return (
    <>
      <button onClick={fnSetStage} data-stage='sum'>더하기</button>
      <button onClick={fnSetStage} data-stage='sub'>빼기</button>
      <button onClick={fnSetStage} data-stage='multi'>곱셈</button>
      <button onClick={fnSetStage} data-stage='divide'>나눗셈</button>
    </>
  );
};

export default CompMenu;
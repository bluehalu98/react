import React, { useContext, useEffect } from 'react';
import { AppContext } from './App';

const CompMenu = () => {
  const {_setStage,_setNum1, _setNum2} = useContext(AppContext)
  const fnSetStage = (e)=> { 
    _setStage(e.target.getAttribute('data-stage'))
    _setNum1(Math.ceil(Math.random()*9))
    _setNum2(Math.ceil(Math.random()*9))
  }

  return (
    <div className='menu-container'>
      <button onClick={fnSetStage} data-stage='plus'>더하기 문제</button>
      <button onClick={fnSetStage} data-stage='minus'>빼기 문제</button>
    </div>
  );
};

export default CompMenu;<button></button>
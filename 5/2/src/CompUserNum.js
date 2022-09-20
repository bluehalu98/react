import React, { useContext, useEffect } from 'react';
import { AppContext } from './App';

const CompUserNum = () => {
  const {_stage,_num1,_num2,_userNum,_setUserNum} = useContext(AppContext)
  const fnResult = (e)=> {
    e.preventDefault()
  }
  const fnCheckInput = (e)=> {
    _setUserNum(parseInt(e.target.value))
  }
  useEffect(()=>{
    let calcN = (_stage==='plus')? _num1+_num2 : _num1 - _num2
    let elInput = document.querySelector('.user-input')
    elInput.classList.remove('active1','active2')
    if(calcN===_userNum){
      elInput.classList.add('active1')
    }else{
      elInput.classList.add('active2')
    }
  })
  return (
    <>
      <input className='user-input' type="text" onChange={fnCheckInput} /> <br />
      <button onClick={fnResult}>결과보기</button>
    </>
  );
};

export default CompUserNum;
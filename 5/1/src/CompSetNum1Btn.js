import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from './App';

const CompSetNum1Btn = () => {
  const {_setNum1} = useContext(AppContext)
  useEffect(()=>{
    document.querySelector('.btn1').addEventListener('click',()=>{
      _setNum1(3)
    })
  })
  return (
    <button className='btn1'>
      num1 바꾸기
    </button>
  );
};

export default CompSetNum1Btn;
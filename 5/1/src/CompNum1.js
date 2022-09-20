import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AppContext } from './App';

const CompNum1 = () => {
  const {_num1, _setNum1} = useContext(AppContext)
  useEffect(()=>{
    _setNum1(Math.random()*10)
    console.log('CompNum1 출력');
  },[])
  return (
    <>
      {_num1}
    </>
  );
};

export default CompNum1;
import React, { useContext, useEffect } from 'react';
import { AppContext } from './App';
import CompUserNum from './CompUserNum';

const CompPlus = () => {
  const {_num1,_num2} = useContext(AppContext)
  useEffect(()=>{
    const id = setTimeout(()=>{
      document.querySelector('.comp-plus').classList.add('active')
    },10)
    return(()=>{
      clearTimeout(id)
    })
  },[])
  return (
    <form className='comp-plus'>
      {_num1} + {_num2} = <CompUserNum/>
    </form>
  );
};

export default CompPlus;
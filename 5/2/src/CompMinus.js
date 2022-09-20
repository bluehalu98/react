import React, { useContext, useEffect } from 'react';
import { AppContext } from './App';
import CompUserNum from './CompUserNum';

const CompMinus = () => {
  const {_num1,_num2} = useContext(AppContext)
  useEffect(()=>{      
    const id = setTimeout(() => {
      document.querySelector('.comp-minus').classList.add('active')
    }, 10);
    return(()=>{
      clearTimeout(id)
    })
  },[])
  return (
    <form className='comp-minus'>
      {_num1} - {_num2} = <CompUserNum/>
    </form>
  );
};

export default CompMinus;
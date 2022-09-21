import React from 'react';
import { btnArr } from '../store/store';
import CompBtn from './CompBtn';

const CompInput = () => {
  return (
    <div className='input-container'>
      {
        btnArr.map(v=><CompBtn key={v.id} btnInfo={v}/>)
      }      
    </div>
  );
};

export default CompInput;
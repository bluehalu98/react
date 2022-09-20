import React, { useContext } from 'react';
import { AppContext } from '../App';

const CompInput = () => {
  const {refInput} = useContext(AppContext)
  return (
    <>
      <input type="text" ref={refInput} size={1} />  
    </>
  );
};

export default CompInput;
import React, { useContext } from 'react';
import { AppContext } from '../App';

const CompError = () => {
  const {_setShowE} = useContext(AppContext)
  return (
    <div className='msg-error' onClick={()=>{_setShowE(false)}}>
      <img src={`${process.env.PUBLIC_URL}/img/oops.png`} alt="" />
    </div>
  );
};

export default CompError;
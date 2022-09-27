import React, { useContext } from 'react';
import { AppContext } from '../App';

const CompOutputMsg = () => {
  const {_setShowS} = useContext(AppContext)
  return (
    <div className='msg-output' onClick={()=>{_setShowS(false)}}>
      <img src={`${process.env.PUBLIC_URL}/img/sorry.png`} alt="" />
    </div>
  );
};

export default CompOutputMsg;
import React from 'react';
import CompInput from './CompInput';
import CompMenuBtn from './CompMenuBtn';
import CompPoint from './CompPoint';
import CompResultBtn from './CompResultBtn';


const CompSum = ({_num1, _num2}) => {

  return (
    <>
      {_num1} + {_num2} = <CompInput/>
      <hr />
      <CompResultBtn/>
      <CompPoint/>
      <CompMenuBtn/>
    </>
  );
};

export default CompSum;
import React from 'react';
import CompMenuBtn from './CompMenuBtn';
import CompInput from './CompInput';
import CompResultBtn from './CompResultBtn';
import CompPoint from './CompPoint';

const CompMulti = ({_num1, _num2}) => {

  return (
    <>
      {_num1} * {_num2} = <CompInput/>
      <hr />
      <CompResultBtn/>
      <CompPoint/>
      <CompMenuBtn/>
    </>
  );
};

export default CompMulti;
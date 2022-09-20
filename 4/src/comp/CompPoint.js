import React, { useContext } from 'react';
import { AppContext } from '../App';

const CompPoint = () => {
  const {_point} = useContext(AppContext)
  return (
    <>
      <p>현재 점수는 {_point}입니다.</p>
    </>
  );
};

export default CompPoint;
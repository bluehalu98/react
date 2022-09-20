import React, { useContext } from 'react';
import { AppContext } from './App';

const CompResult = () => {
  const {_point} = useContext(AppContext)
  return (
    <div>
      결과 : {_point}점
    </div>
  );
};

export default CompResult;
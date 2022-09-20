import React from 'react';

const Comp2 = ({_show, _setShow}) => {
  const fnC1 = () => {
    _setShow('comp1')
  }
  return (
    <div>
      comp2 <br />
      <button onClick={fnC1}>comp1</button>
    </div>
  );
};

export default Comp2;
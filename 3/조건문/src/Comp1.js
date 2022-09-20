import React from 'react';

const Comp1 = ({_show, _setShow}) => {
  const fnC2 = () => {
    _setShow('comp2')
  }
  return (
    <div>
      Comp1 <br />
      <button onClick={fnC2}>comp2</button>
    </div>
  );
};

export default Comp1;
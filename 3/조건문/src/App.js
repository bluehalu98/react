import React, { useState } from 'react';
import Comp1 from './Comp1';
import Comp2 from './Comp2';

const App = () => {
  const [_show, _setShow] = useState('comp1')
  let comp
  if(_show==='comp1'){
    comp=
    <Comp1
    _show={_show}
    _setShow={_setShow}
    />
  }else if(_show==='comp2'){
    comp=
    <Comp2
    _show={_show}
    _setShow={_setShow}
    />
  }
  return (
    <>
      {comp}
    </>
  );
};

export default App;
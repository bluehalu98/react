import React, { useState } from 'react';
import Comp1 from './comp/Comp1';
import Comp2 from './comp/Comp2';

const App = () => {
  const [_show,_setShow] = useState(true)
  const [_cnt,_setCnt] = useState('')
  return (
    <>
      {
        (_show)
        ?
        <Comp1
          _show={_show}
          _setShow={_setShow}
          _cnt={_cnt}
          _setCnt={_setCnt}
        />
        :
        <Comp2
          _show={_show}
          _setShow={_setShow}
          _cnt={_cnt}
          _setCnt={_setCnt}
        />
      }
    </>
  );
};

export default App;
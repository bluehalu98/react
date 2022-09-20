import React, { useState } from 'react';
import Comp1 from './comp/Comp1';
import Comp2 from './comp/Comp2';

const App = () => {
  const [_show1,_setShow1]=useState(true)
  const [_show2,_setShow2]=useState(false)
  return (
    <>
      {(_show1)&&
      <Comp1
        _setShow1={_setShow1}
        _setShow2={_setShow2}
      />
      }
      {(_show2)&&
      <Comp2
        _setShow1={_setShow1}
        _setShow2={_setShow2}
      />
      }
    </>
  );
};

export default App;
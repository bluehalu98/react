import React, { createContext, useState } from 'react';
import CompNum1 from './CompNum1';
import CompSetNum1Btn from './CompSetNum1Btn';

export const AppContext = createContext() 
const App = () => {
  const [_num1, _setNum1] = useState(0)
  return (
    <AppContext.Provider value={{_num1, _setNum1}}>
      <CompNum1/>
      <hr />
      <CompSetNum1Btn/>
    </AppContext.Provider>
  );
};

export default App;
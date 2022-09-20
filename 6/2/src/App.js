import React, { createContext, useState } from 'react';
import { listArr } from './store/list';
import CompAdd from './comp/CompAdd';
import CompList from './comp/CompList';


export const AppContext = createContext()
const App = () => {
  const [_stage,_setStage] = useState('list')
  const [_listArr,_setListArr] = useState(listArr)
  return (
    <AppContext.Provider value={{
      _stage, _setStage,
      _listArr,_setListArr
      }}>
        <h1>명단관리앱</h1>
        <hr />
      {(_stage==='list')&&<CompList/>}
      {(_stage==='add')&&<CompAdd/>}
    </AppContext.Provider>
  );
};

export default App;
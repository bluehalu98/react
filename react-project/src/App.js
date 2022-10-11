import React from 'react';
import { createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import CompHeader from './comp/header/CompHeader';
import CompFooter from './comp/footer/CompFooter';
import CompRegister from './comp/register/CompRegister';
import CompSignIn from './comp/singin/CompSignIn';
import CompOutputList from './comp/output/CompOutputList';
import CompAddList from './comp/addList/CompAddList';
import { firebaseApp } from './store/fbInit';

export const AppContext = createContext()
const App = () => {
  return (
    <AppContext.Provider value={{}}>
      <CompHeader/>
      <Routes> 
        <Route path='/' element={<CompSignIn/>}/>
        <Route path='/register' element={<CompRegister/>}/>
        <Route path='/list' element={<CompOutputList/>}/>
        <Route path='/add' element={<CompAddList/>}/>
      </Routes>
      <CompFooter/>
    </AppContext.Provider>
  );
};

export default App;
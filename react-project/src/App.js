import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Comp404 from './Comp/comp404/Comp404';
import CompAbout from './Comp/compAbout/CompAbout';
import CompBizArea from './Comp/compBizArea/CompBizArea';
import CompBizIntro from './Comp/compBusiness/CompBizIntro';
import CompFooter from './Comp/compFooter/CompFooter';
import CompHeader from './Comp/compHeader/CompHeader';
import CompHome from './Comp/compHome/CompHome';
import CompLocation from './Comp/compLocation/CompLocation';
import CompQnA from './Comp/compQnA/CompQnA';
import CompNotice from './Comp/compNotice/CompNotice';
import CompSubWrap from './Comp/compSubWrap/CompSubWrap';
import CompBoard from './Comp/compBoard/CompBoard';
import CompContact from './Comp/compContact/CompContact';
import CompGallery from './Comp/compGallery/CompGallery';

export const AppContext = createContext()
const App = () => {
  const [_stage,_setStage] = useState('')
  const fnWindowSize = () => {
    if(matchMedia('screen and (min-width:1000px)').matches){
      _setStage('lg')
    }else{
      _setStage('sm')
    }
  }
  useEffect(()=>{
    fnWindowSize()
    window.addEventListener('resize', ()=>{
      fnWindowSize()
    })
  },[])
  return (
    <BrowserRouter>
      <AppContext.Provider value={{_stage,_setStage}}>
        <CompHeader/>
        <Routes>
          <Route path='/' element={<CompHome/>}/>
  
          <Route path='/company' element={<Comp404/>}/>
          <Route path='/company' element={<CompSubWrap/>}>{/* nested routing */}
            <Route path='about' element={<CompAbout/>}/>{/* 중첩라우팅 안에서는 / 절대경로를 절대 쓰면 안된다 */}
            <Route path='location' element={<CompLocation/>}/>
          </Route >
  
          <Route path='/biz' element={<Comp404/>}/>
          <Route path='/biz' element={<CompSubWrap/>}>
            <Route path='intro' element={<CompBizIntro/>}/>
            <Route path='area' element={<CompBizArea/>}/>
          </Route >
  
          <Route path='/product' element={<Comp404/>}/>
          <Route path='/product' element={<CompSubWrap/>}>
            <Route path='gallery' element={<CompGallery/>}/>
          </Route >
  
          <Route path='/online' element={<Comp404/>}/>
          <Route path='/online' element={<CompSubWrap/>}>
            <Route path='contact' element={<CompContact/>}/>
          </Route >
          
          <Route path='/community' element={<Comp404/>}/>
          <Route path='/community' element={<CompSubWrap/>}>
            <Route path='notice' element={<CompNotice/>}/>
            <Route path='QnA' element={<CompQnA/>}/>
            <Route path='board' element={<CompBoard/>}/>
          </Route >
          
          <Route path='*' element={<Comp404/>}/>
        </Routes>
  
        <CompFooter/>
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;
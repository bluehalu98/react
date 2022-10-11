import React from 'react';
import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CompCurrent from './CompCurrent/CompCurrent';
import CompDaily from './CompDaily/CompDaily';
import CompHourly from './CompHourly/CompHourly';
import CompMap from './CompMap/CompMap';
import { fnGetAddress, fnGetCurrentLoaction, fnGetWeatherData } from './store/functions';

export const AppContext = createContext()

const App = () => {
  let [_weatherData, _changeWeatherData] = useState(null) //날씨데이터
  let [_addressData, _changeAddressData] = useState(null) //주소데이터
  let [_latLng , _changeLatLng] = useState(null)//위경도데이터객체

  //초기화면구성함수------------------------------------------------//
  const fnInitApp = async () => {
    let latLng = await fnGetCurrentLoaction()//위경도를 객체로 받아옴
    let weatherData = await fnGetWeatherData(latLng.lat, latLng.lng )//g날씨 정보 받아옴
    let address = await fnGetAddress(latLng.lat, latLng.lng)
    _changeLatLng(latLng)//_latLng 스테이트 변경,
    _changeWeatherData(weatherData)//_weatherData 스테이트 변경
    _changeAddressData(address)//_addressData 스테이트 변경
  }//initApp

  //앱시작시할일들------------------------------------------------//
  useEffect(() => {
    fnInitApp() 
  },[])

  return (
    <AppContext.Provider value={{
      _weatherData, _changeWeatherData,
      _addressData, _changeAddressData,
      _latLng , _changeLatLng,
    }}>
      <h1><img src={`${process.env.PUBLIC_URL}/img/main/title.png`} alt="" /></h1>
      <main>
        <CompCurrent />
        <CompMap />
        <CompHourly />
        <CompDaily />
      </main>
      <footer>maded by a@a.net</footer>
    </AppContext.Provider>
  );
};

export default App;
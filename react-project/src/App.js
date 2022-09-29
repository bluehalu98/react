import React from 'react';
import { useEffect, useState, createContext } from 'react';
import CompCurrent from './compCurrent/CompCurrent';
import CompDaily from './compDaily/CompDaily';
import CompHourly from './compHourly/CompHourly';
import CompMap from './compMap/CompMap';
import { fnGetAddress, fnGetCurrentLocation, fnGetWeatherData } from './store/functions';

export const AppContext = createContext()
const App = () => {
  const [_weatherData, _setWeatherData] = useState(null)//날씨데이터, 비우면 undefined
  const [_addressData, _setAddressData] = useState(null)//주소데이터
  const [_latLng, _setLatLng] = useState(null)//위경도데이터 객체

  //초기화면 구성 함수
  const fnInitApp = async () => {//현재위치 위경도를 확인후 _latLng 스테이트를 변경, _weatherData 스테이트를 변경
    let latLng = await fnGetCurrentLocation()//위경도를 객체를 받아옴
    let weatherData = await fnGetWeatherData(latLng.lat, latLng.lng)//날씨 정보 받아옴
    let address = await fnGetAddress(latLng.lat,latLng.lng)//주소 정보 받아옴
     
    _setLatLng(latLng)
    _setWeatherData(weatherData)
    _setAddressData(address)
  }

  //앱 마운트 함수(비동기 자료수신과 useState는 마운트시에 딱 한번)
  useEffect(()=>{
    //위치를 받아야 함
    //위치에 따른 지도 출력
    //날씨 정보를 받아와야 함
    fnInitApp()
  },[])

  return (
    <AppContext.Provider value={{_weatherData,_setWeatherData,_addressData,_setAddressData,_latLng,_setLatLng}}>
      <h1>Weather API</h1>
      <main>
        <CompCurrent/>
        <CompMap/>
        <CompHourly/>
        <CompDaily/>
      </main>
    </AppContext.Provider>
  );
};

export default App;
/* 
  리액트는 자식컴포넌트부터 시작해서 index까지 만들어지기때문에
  항상 부모 컴포넌트내에서 정보를 로드해야할경우 자식 컴포넌트에게 값이없을때 return false를 줘야함
*/
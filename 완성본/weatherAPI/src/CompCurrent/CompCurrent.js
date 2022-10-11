import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';
import { fnGetAddress, fnGetCurrentLoaction, fnGetWeatherData, fnSetWeatherData } from '../store/functions';

const CompCurrent = () => {
  let { _weatherData, _addressData, _changeWeatherData, _changeAddressData, _latLng, _changeLatLng } = useContext(AppContext)

  if (!_weatherData || !_addressData) return false //날씨데이터가 수신되기 전에 출력을 방지한다
  let currentData = _weatherData.current//날씨데이터중 현재날씨데이터만 저장
  let dataObj = fnSetWeatherData(currentData)//현재날씨데이트를 가공해서 각각 정보를 객체로 받는다
  let { year, month, date, hour, minute, temp, icon, rain, condition, windSpeed, windDeg, humidity, uv, bg } = dataObj
  let address
  try {
    address = _addressData[5].formatted_address//대한민국 서울시 강남구
  } catch {
    address = '확인되지 않는 주소'
  }
  
  const fnRefresh = async () => {
    let yn = window.confirm(`현재위치로 날씨정보를 갱신하시겠습니까?`)
    if (yn) {
      let latLng = await fnGetCurrentLoaction()//위경도를 객체로 받아옴
      let weatherData = await fnGetWeatherData(latLng.lat, latLng.lng )//g날씨 정보 받아옴
      let address = await fnGetAddress(latLng.lat, latLng.lng)
      _changeLatLng(latLng)//_latLng 스테이트 변경,
      _changeWeatherData(weatherData)//_weatherData 스테이트 변경
      _changeAddressData(address)//_addressData 스테이트 변경
    }
  }//fnRefresh

  return (
    <section className='section-current'>
      <h2 className='title-current'>현재날씨</h2>
      <div className="inner">
        <img className='bg' src={`${process.env.PUBLIC_URL}/img/weather/${bg}.jpg`} alt="" />
        <div className="wrap">
          <p className='address'>
            {address}
            <button className='refresh' onClick={fnRefresh}><i className="fa-solid fa-arrows-rotate"></i></button>
          </p>
          <p className='date'>
            <span>
              <i className="fa-regular fa-calendar"></i>
              <b>{year}</b>-
              <b>{month}</b>-
              <b>{date}</b>
            </span>
            <span>
              <i className="fa-regular fa-clock"></i>
              <b>{hour}</b>:<b>{minute}</b>
            </span>
          </p>
          <p className='temp'>
            <img src={`${process.env.PUBLIC_URL}/img/icons/${icon}.gif`} alt='' />
            <b>
              <i className="fa-solid fa-temperature-three-quarters"></i>
              {temp}<sup>&#8451;</sup>
            </b>
          </p>
          <p className='desc'>
            <b><i className="fa-solid fa-cloud-showers-heavy"></i> : {rain} <sub>mm</sub></b>
            <b>[ {condition} ]</b>
          </p>
          <p className='etc'>
            <b>
              <i className="fa-solid fa-wind"></i> : {windSpeed} <sub>hPa</sub>
              <i className="fa-solid fa-circle-arrow-up wind-deg" style={{ transform: `rotate(${windDeg}deg)` }}></i>
            </b>
            <b><i className="fa-solid fa-droplet"></i> : {humidity} <sub>%</sub></b>
            <b><i className="fa-regular fa-sun"></i> : {uv}</b>
          </p>
        </div>
      </div>
    </section >
  );
};

export default CompCurrent;
import React, { useContext } from 'react';
import { AppContext } from '../App';
import { fnSetWeatherData } from '../store/functions';

const CompCurrent = () => {
  const {_weatherData, _addressData} = useContext(AppContext)
  if(!_weatherData || !_addressData) return false
  let currentData = _weatherData.current
  let dateObj = fnSetWeatherData(currentData)
  let {year, month, date, temp, icon, hour, min, rain, status, windSpd, windDeg, humidity, UV} = dateObj
  return (
    <section className='section-current '>
      <div className="inner style-2">
        <h2>현재날씨</h2>
        <p className='address'>{_addressData[5].formatted_address}</p>
        <p className='date'>
          <b>{year}</b>
          <b>{month}</b>
          <b>{date}</b>
          <b>{hour}</b>
          <b>{min}</b>
        </p>
        <p className="temp">
         <img src={`${process.env.PUBLIC_URL}/img/icons/${icon}.png`} alt="" />
         <b>{temp}&#8451;</b>
        </p>
        <p className='desc'>
         <b>강수량 : {rain}mm</b>
         <b>날씨상태 : {status}</b>
        </p>
        <p className='etc'>
         <b>풍속 : {windSpd}hpa</b>
         <b>풍향 : <i className="fa-solid fa-circle-arrow-up" style={{transform : `rotate(${windDeg}deg)`}}></i></b>
         <b>습도 : {humidity}%</b>
         <b>UV : {UV}</b>
        </p>
      </div>
    </section>
  );
};

export default CompCurrent;
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
          <span>
            <i className="fa-regular fa-calendar"></i>
            <b>{year}</b>/
            <b>{month}</b>/
            <b>{date}</b> &nbsp;
            <i className="fa-regular fa-clock"></i>
            <b>{hour}</b>:
            <b>{min}</b>
          </span>
        </p>
        <p className="temp">
         <img src={`${process.env.PUBLIC_URL}/img/icons/${icon}.png`} alt="" />
         <b><i className="fa-solid fa-temperature-low"></i>{temp}&#8451;</b>
        </p>
        <p className='desc'>
         <b><i className='fa-solid fa-cloud-showers-heavy'></i>{rain}mm</b>
         <b>날씨상태 : {status}</b>
        </p>
        <p className='etc'>
         <b><i className="fa-solid fa-wind"></i> : {windSpd}hpa</b>
         <b><i className="fa-solid fa-circle-arrow-up" style={{transform : `rotate(${windDeg}deg)`}}></i></b>
         <b><i className="fa-solid fa-droplet"></i> : {humidity}%</b>
         <b><i className="fa-solid fa-sun"></i> : {UV}</b>
        </p>
      </div>
    </section>
  );
};

export default CompCurrent;
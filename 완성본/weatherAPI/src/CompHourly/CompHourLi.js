import React from 'react';
import { fnSetWeatherData } from '../store/functions';

const CompHourLi = ({ hourData , weatehrColorArr }) => {
  let { month, date, hour, temp, icon, rain, condition, windSpeed, windDeg, humidity, uv, bg } = fnSetWeatherData(hourData)
  var weatehrColor = weatehrColorArr[ parseInt((50 - temp)/100 * 11 ) ]

  return (
    <li>
      <p className='date'>
        <span>{month}월</span>
        <span>{date}일</span>
        <span> ({hour}시)</span>
      </p>
      <img className='icon' src={`${process.env.PUBLIC_URL}/img/icons/${icon}.gif`} alt='' />
      <p>
        <i className="fa-solid fa-cloud-showers-heavy"></i> : {rain}<sub>mm</sub>
      </p>
      <p className='temp'>
        <span className="vertical-line" style={{transform:`scaleY(${temp/50})`,borderRightColor:`${weatehrColor}`}}></span>
        <span className='temp-number' style={{top:`${50 - temp}%`,backgroundColor:`${weatehrColor}`}}>{temp}</span>
      </p>
      <p>
        <b>
          <i className="fa-solid fa-wind"></i> : {windSpeed}<sub>hPa</sub>
        </b>
        <b><i className="fa-solid fa-droplet"></i> : {humidity}<sub>%</sub></b>
        <b><i className="fa-regular fa-sun"></i> : {uv}</b>
      </p>
    </li >
  );
};

export default CompHourLi;
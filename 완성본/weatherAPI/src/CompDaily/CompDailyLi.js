import React from 'react';
import { fnSetWeatherData } from '../store/functions';

const CompDailyLi = ({ dailyData }) => {

  let { month, date, icon, day, rain, condition, tempMin, tempMax, uv, windDeg, windSpeed, humidity } = fnSetWeatherData(dailyData)

  return (
    <li>
      <p className='date'>
        <b>{month}월</b>
        <b>{date}일</b>
        <b>({day})</b>
      </p>
      <figure className="wrap">
        <img src={`${process.env.PUBLIC_URL}/img/icons/${icon}.gif`} alt='' />
        <figcaption>
          <p className='temp'>
            <b>
              <i className="fa-solid fa-temperature-three-quarters"></i>
              {tempMin}<sup>&#8451;</sup> ~ {tempMax}<sup>&#8451;</sup>
            </b>
          </p>
          <p className='desc'>
            <b><i className="fa-solid fa-cloud-showers-heavy"></i> : {rain}<sub>mm</sub></b>
            <b>[{condition}]</b>
          </p>
          <p className='etc'>
            <b>
              <i className="fa-solid fa-wind"></i> : {windSpeed} <sub>hPa</sub>
              <i className="fa-solid fa-circle-arrow-up wind-deg" style={{ transform: `rotate(${windDeg}deg)` }}></i>
            </b>
            <b>
              <i className="fa-solid fa-droplet"></i> : {humidity}<sub>%</sub>
            </b>
            <b>
              <i className="fa-regular fa-sun"></i> : {uv}
            </b>
          </p>
        </figcaption>
      </figure>
    </li>
  );
};

export default CompDailyLi;
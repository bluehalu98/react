/* 컴퍼넌트 파일이 아닌경우 useState, useEffect와 같은 훅스를 사용할 수 없음 */

import { codeEn, codeKr } from "./conditionCode"

//현재 위치를 리턴하는 함수
export const fnGetCurrentLocation = () => {
  return new Promise(res=>{
    navigator.geolocation.getCurrentPosition(location=>{//위치정보를 가져온 후 할일
      let latLng = {
        lat : location.coords.latitude ,//위도정보
        lng : location.coords.longitude ,//경도정보
      }
      
      res(latLng)//가져온 위치정보를 객체로 리턴
      //resolve 이후로는 실행되지 않음
    })
  })
}

//현재 날씨정보를 리턴하는 함수
export const fnGetWeatherData = (lat, lng) => {
  return new Promise(res => {
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`).then((data)=>{
      let weatherData = data.json()//fetch안에서만 사용가능, 받아온 데이터를 스크립트 객체로 변환
      res(weatherData)
    })
  })
}

//주소를 리턴하는 함수
export const fnGetAddress = (lat, lng) => {
  return new Promise(res => {
    var geocoder = new window.google.maps.Geocoder;
    var latlng = {
      lat: lat,
      lng: lng,
    };
    geocoder.geocode({ 'location': latlng }, function (address, status) {
      if (status === "OK") {
        res(address)
      } else {
        res(null)
      }
    });
  })
}

//날씨정보를 가공해서 리턴하는 함수
export const fnSetWeatherData = (data)=> {
  let time = new Date(data.dt * 1000)
  let year = time.getFullYear() 
  let month = time.getMonth()+1 //0월부터 11월까지 
  let dayArr = ['sun','mon','tue','wed','thu','fri','sat',]
  let day = dayArr[time.getDay()]
  let date = time.getDate()
  let hour = time.getHours()
  let min = time.getMinutes()
  let temp = (data.temp -273.15).toFixed(1)
  let tempMin = (data.temp.min-273.15).toFixed(1)
  let tempMax = (data.temp.max-273.15).toFixed(1)
  let icon = data.weather[0].icon
  let rain = (data.rain)?data.rain : 0
  let desc = data.weather[0].description
  let status = codeKr[codeEn.indexOf(desc)]
  let windSpd = data.wind_speed
  let windDeg = data.wind_deg
  let humidity = data.humidity
  let UV = data.uvi
  let dateObj = {
    year, //year:year
    month, date, temp, icon, hour, min, rain, status, windSpd, windDeg, humidity, UV, tempMin, tempMax, day
  }
  return(dateObj)
}
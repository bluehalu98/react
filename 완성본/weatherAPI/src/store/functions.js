/* 컴퍼넌트 파일이 아닌경우 useState, useEffect와 같은 훅스를 사용할 수 없음 */
import { codeEnArr, codeKrArr } from "./conditionCode"

//현재 위치를 리턴하는 함수----------------------------------//
export const fnGetCurrentLoaction = () => {
  return new Promise((res) => {
    navigator.geolocation.getCurrentPosition((location) => {
      let latLng = {
        lat: location.coords.latitude, //위도정보
        lng: location.coords.longitude,//경도정보
      }
      res(latLng)//위치정보를 가져온 후 위치정보를 객체롤 리턴
    })//getCurrentPosition
  })//promise
}//fnGetCurrentLoaction

//날씨정보를 리턴하는 함수----------------------------------//
export const fnGetWeatherData = (lat, lng) => {
  return new Promise((res) => {
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lng}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
      .then((data) => {
        let weatherData = data.json()//받아온 날씨데이터를 스크립트객체로 변환
        res(weatherData)
      })//then
  })//promise
}//fnGetWeather

//주소를 리턴하는 함수----------------------------------//
export const fnGetAddress = (lat, lng) => {
  return new Promise((res) => {
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
    });//geocode
  })//promise
}//fnGetAddress

//날씨정보를 가공해서 리턴하는 함수 ----------------------------------//
export const fnSetWeatherData = (data) => {
  let time = new Date(data.dt * 1000)
  let year = time.getFullYear()
  let month = time.getMonth() + 1
  let date = time.getDate()
  let hour = time.getHours()
  let dayArr = ['일','월','화','수','목','금','토']
  let day = dayArr[time.getDay()]
  let minute = time.getMinutes()
  let temp = parseInt(data.temp - 273.15)
  let tempMin = parseInt(data.temp.min- 273.15)
  let tempMax= parseInt(data.temp.max- 273.15)
  let icon = data.weather[0].icon
  let rain = (data.rain) ? data.rain : 0
  rain = (typeof(rain) === 'object') ? rain['1h'] : rain  //시간별정보에서는 객체로 반환됨 , rain{ 1h : 1.5 }
  let desc = data.weather[0].description
  let idx = codeEnArr.indexOf(desc)
  let condition = codeKrArr[idx]
  //let condition= data.weather[0].description
  let windSpeed = data.wind_speed
  let windDeg = data.wind_deg
  let humidity = data.humidity
  let uv = data.uvi
  let bg = data.weather[0].main
  let dataObj = {
    year, month, date, temp, icon, hour, day, minute, rain, condition, windSpeed, windDeg, humidity, uv, tempMin, tempMax, bg
  }
  return (dataObj)
}//fnSetWeatherData

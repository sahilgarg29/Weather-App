import { useEffect, useState } from 'react';
import { fetchHourlyDailyWithCoordinartes, fetchCurrentWithCoordinartes, fetchCurrentWithCityName } from './Apis/openWeather';
import './App.css';
import Dailyforcast from './Components/DailyForcast';
import SearchBar from './Components/SearchBar';
import TemperatureCard from './Components/TempratureCard';
import WeatherChart from './Components/WeatherChart';
import Clouds from './images/clouds.png'

function App() {

  const [location, setLocation] = useState("Bangalore");
  const [forcastData, setForcastData] = useState(null);
  const [selectedDay, setSelectedDay] = useState(1);
  useEffect(() => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
        console.log('latitude', position.coords.latitude, 'longitude', position.coords.longitude);
        fetchHourlyDailyWithCoordinartes(position.coords.latitude, position.coords.longitude).then((res) => {
          setForcastData(res)
        }).catch((err) => {
          console.log(err)
        });
       },
      (error_message) => {
        alert('An error has occured while retrieving location', error_message)
      });
    } else {
      console.log('geolocation is not enabled on this browser')
    }
  }, [])

  function filterDataByDate(hourlyData, day){
    let data = hourlyData.filter((e, i) => new Date(e.dt * 1000).getDay() === day && i % 2 === 0);
    console.log(data);
    return data;
  }

  function convertToTimeArray(hourlyData){
    let arr = hourlyData.map((e) => new Date(e.dt * 1000).getUTCHours() + ':00');
    console.log(arr)
    return arr;
  }

  function convertToArray(hourlyData){
    let arr = hourlyData.map((e) => e.temp);
    console.log(arr);
    return arr;
  }


  return (
    <div className='app'>
      <SearchBar location={location} onLocationChange={setLocation} />
      <Dailyforcast dailyData={forcastData? forcastData.daily: []} />
      <div className='currentForcast'>
        <TemperatureCard temp="39" icon={Clouds}/>
        <WeatherChart series={convertToArray(filterDataByDate(forcastData? forcastData.hourly: [], selectedDay))} labels={convertToTimeArray(filterDataByDate(forcastData? forcastData.hourly: [], selectedDay))}/>
      </div>
    </div>
  );
}

export default App;

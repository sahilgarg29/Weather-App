import { useEffect, useState } from 'react';
import { fetchHourlyDailyWithCoordinartes, fetchCurrentWithCoordinartes, fetchCurrentWithCityName } from './Apis/openWeather';
import './App.css';
import Dailyforcast from './Components/DailyForcast';
import SearchBar from './Components/SearchBar';
import SearchSuggestion from './Components/SearchSuggestion';
import SunriseSunset from './Components/SunriseSunset';
import TemperatureCard from './Components/TempratureCard';
import WeatherChart from './Components/WeatherChart';
import WeatherDataCard from './Components/WeatherDataCard';
import citiesData from './Utils/citiesData';
import correctImage from './Utils/correctWeatherImage';

function App() {

  const [location, setLocation] = useState("Bangalore");
  const [forcastData, setForcastData] = useState(null);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedDayData, setSelectedDayData] = useState(null);
  const [cities, setCities] = useState(citiesData);

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
  }, []);


  useEffect(() => {
    setSelectedDayData(forcastData?.daily.filter((e) => new Date(e.dt * 1000).getDay() == selectedDay)[0]);
  }, [selectedDay, forcastData])

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

  function getTimeFromDate(dt){
    let date = new Date(dt* 1000);

    return date.getHours() + ":00" 
  }

  return (
    <div className='app'>
      <div className='search'>
        <SearchBar location={location} onLocationChange={setLocation} />
        <SearchSuggestion suggestions={cities.filter((city) => city.City.toLowerCase().includes(location.toLowerCase())).slice(0, 8)}/>
      </div>
      <Dailyforcast dailyData={forcastData? forcastData.daily: []} onDayChange={setSelectedDay} selectedDay={selectedDay}/>
      <div className='currentForcast'>
        <TemperatureCard temp={forcastData ? Math.round(forcastData.hourly[0].temp) : "24"} icon={forcastData? correctImage(forcastData.hourly[0].weather[0].icon): ""}/>
        <WeatherChart series={convertToArray(filterDataByDate(forcastData? forcastData.hourly: [], selectedDay))} labels={convertToTimeArray(filterDataByDate(forcastData? forcastData.hourly: [], selectedDay))}/>

        <div className='extraDataContainer'>
          <WeatherDataCard title="Pressure" value={selectedDayData? selectedDayData.pressure: ""} symbol="hpa" />
          <WeatherDataCard title="Humidity" value={selectedDayData? selectedDayData.humidity: ""} symbol="%" />
        </div>
        <SunriseSunset sunriseTime={selectedDayData? getTimeFromDate(selectedDayData.sunrise) : ""} sunsetTime={selectedDayData? getTimeFromDate(selectedDayData.sunset) : ""}/>
      </div>
    </div>
  );
}

export default App;

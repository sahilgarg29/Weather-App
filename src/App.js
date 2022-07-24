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
import {ThreeCircles} from 'react-loader-spinner';

function App() {

  const [location, setLocation] = useState("Bangalore");
  const [forcastData, setForcastData] = useState(null);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedDayData, setSelectedDayData] = useState(null);
  const [cities, setCities] = useState(citiesData);
  const [isFocused, setIsFocused] = useState(false);
  const [filterSuggestion, setFilterSuggestion] = useState([]);

  useEffect(() => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
        fetchCurrentWithCoordinartes(position.coords.latitude, position.coords.longitude).then(res => setLocation(res.name))
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
    let filtered = cities.filter((city) => city.City.toLowerCase().includes(location.toLowerCase())).slice(0, 8);
    Promise.all(filtered.map((e) => fetchCurrentWithCoordinartes(e.Lat, e.Long))).then((res) => {
      filtered.forEach((e, i) => e.data = res[i])
      setFilterSuggestion(filtered);
    })
  }, [location])


  useEffect(() => {
    setSelectedDayData(forcastData?.daily.filter((e) => new Date(e.dt * 1000).getDay() == selectedDay)[0]);
  }, [selectedDay, forcastData])

  function filterDataByDate(hourlyData, day){
    let data = hourlyData.filter((e, i) => new Date(e.dt * 1000).getDay() === day && i % 2 === 0);
    return data;
  }

  function convertToTimeArray(hourlyData){
    let arr = hourlyData.map((e) => new Date(e.dt * 1000).getUTCHours() + ':00');
    console.log(arr)
    return arr;
  }

  function convertToArray(hourlyData){
    let arr = hourlyData.map((e) => Math.round(e.temp));
    console.log(arr)
    return arr;
  }

  function getTimeFromDate(dt){
    let date = new Date(dt* 1000);

    return date.getHours() + ":00" 
  }

  function handleSuggestionClick(city){
    setLocation(city.City)
    setIsFocused(false)
    fetchHourlyDailyWithCoordinartes(city.Lat, city.Long).then((res) => {
      setForcastData(res);
    })
  }
  
  if(forcastData){
    return (
      <div className='app'>
        <div className='search'>
          <SearchBar location={location} onLocationChange={setLocation} setIsFocused={setIsFocused}/>
          {isFocused && <SearchSuggestion suggestions={filterSuggestion} onSuggestionClick={handleSuggestionClick}/>}
        </div>
        <Dailyforcast dailyData={forcastData? forcastData.daily: []} onDayChange={setSelectedDay} selectedDay={selectedDay}/>
        <div className='currentForcast'>
          <TemperatureCard temp={selectedDayData? Math.round(selectedDayData.temp.day): ""} icon={selectedDayData? correctImage(selectedDayData.weather[0].icon): ""}/>
          <WeatherChart series={convertToArray(filterDataByDate(forcastData? forcastData.hourly: [], selectedDay))} labels={convertToTimeArray(filterDataByDate(forcastData? forcastData.hourly: [], selectedDay))}/>
  
          <div className='extraDataContainer'>
            <WeatherDataCard title="Pressure" value={selectedDayData? selectedDayData.pressure: ""} symbol="hpa" />
            <WeatherDataCard title="Humidity" value={selectedDayData? selectedDayData.humidity: ""} symbol="%" />
          </div>
          <SunriseSunset sunriseTime={selectedDayData? getTimeFromDate(selectedDayData.sunrise) : ""} sunsetTime={selectedDayData? getTimeFromDate(selectedDayData.sunset) : ""}/>
        </div>
      </div>
    );
  }else{
    return <div className='loader'>
      <ThreeCircles
    height="100"
    width="100"
    color="#008FFB"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
    ariaLabel="three-circles-rotating"
    outerCircleColor=""
    innerCircleColor=""
    middleCircleColor=""
  />
    </div>
  }
  
  
}

export default App;

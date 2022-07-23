import { useEffect, useState } from 'react';
import { fetchHourlyDailyWithCoordinartes, fetchCurrentWithCoordinartes, fetchCurrentWithCityName } from './Apis/openWeather';
import './App.css';
import Dailyforcast from './Components/DailyForcast';
import SearchBar from './Components/SearchBar';
import TemperatureCard from './Components/TempratureCard';
import Clouds from './images/clouds.png'

function App() {

  const [location, setLocation] = useState("Bangalore");
  const [forcastData, setForcastData] = useState(null);

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


  return (
    <div className='app'>
      <SearchBar location={location} onLocationChange={setLocation} />
      <Dailyforcast dailyData={forcastData? forcastData.daily: []} />
      <div className='currentForcast'>
        <TemperatureCard temp="39" icon={Clouds}/>
      </div>
    </div>
  );
}

export default App;

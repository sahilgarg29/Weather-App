import { useEffect, useState } from 'react';
import { fetchwithCoordinartes, fetchCurrentWithCoordinartes, fetchCurrentWithCityName } from './Apis/openWeather';
import './App.css';
import SearchBar from './Components/SearchBar';

function App() {

  const [location, setLocation] = useState("Bangalore");

  useEffect(() => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
        console.log('latitude', position.coords.latitude, 'longitude', position.coords.longitude);
        // fetchCurrentWithCityName(location).then((res) => {
        //   console.log(res)
        // }).catch((err) => {
        //   console.log(err)
        // });
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
    </div>
  );
}

export default App;

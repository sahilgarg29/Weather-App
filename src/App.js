import { useState } from 'react';
import './App.css';
import SearchBar from './Components/SearchBar';

function App() {

  const [location, setLocation] = useState("Bangalore");

  return (
    <div className='app'>
      <SearchBar location={location} onLocationChange={setLocation} />
    </div>
  );
}

export default App;

import React from 'react'
import correctImage from '../../Utils/correctWeatherImage'
import './suggestionCard.css'

const SuggestionCard = ({city, onSuggestionClick}) => {
  return (
    <div className='suggestionCard' onClick={() => onSuggestionClick(city)} >
      <p><span>{city.City}</span>, <span>{city.State}</span></p>

      <div className='suggestionCardRight'>
        <div>
          <p>{Math.round(city.data.main.temp)}<span>&#176;</span>C</p>
          <p>{city.data.weather[0].main}</p>
        </div>
      
          <img src={correctImage(city.data.weather[0].icon)} alt="" className='suggestionCardImage'/>
      </div>
    </div>
  )
}

export default SuggestionCard
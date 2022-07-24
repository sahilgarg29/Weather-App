import React from 'react'
import './suggestionCard.css'

const SuggestionCard = ({city}) => {
  return (
    <div className='suggestionCard'>
      <p><span>{city.City}</span>, <span>{city.State}</span></p>
    </div>
  )
}

export default SuggestionCard
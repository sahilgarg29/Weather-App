import React from 'react'
import SuggestionCard from '../SuggestionCard';

import './searchSuggestion.css';

const SearchSuggestion = ({suggestions, onSuggestionClick, }) => {
  return (
    <div className='searchSuggestioncontainer'>{suggestions.map((e, i) => <SuggestionCard city={e} key={i} onSuggestionClick={onSuggestionClick}/>)}</div>
  )
}

export default SearchSuggestion
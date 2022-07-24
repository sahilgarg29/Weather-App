import React from 'react'
import SuggestionCard from '../SuggestionCard';

import './searchSuggestion.css';

const SearchSuggestion = ({suggestions}) => {
  return (
    <div className='searchSuggestioncontainer'>{suggestions.map((e, i) => <SuggestionCard city={e} key={i}/>)}</div>
  )
}

export default SearchSuggestion
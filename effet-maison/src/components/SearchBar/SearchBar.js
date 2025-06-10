import React from 'react'
import { SearchBarCont, SearchBarContent, SearchBarImg, SearchBarInput, SearchBartext } from './SearchBarElements'
import remise from "../../images/remise.png"

const SearchBar = ({ value, matchValue, setIsMatch, pic, text, reversed, handleChange }) => {

    const [isFocused, setIsFocused] = React.useState(false);

    const isMatch = value === matchValue && matchValue != ''
    setIsMatch(isMatch)

  return (
    <SearchBarCont isFocused={isFocused}>
        <SearchBarContent>
            <SearchBarImg src={pic} />
            <SearchBartext>{text}</SearchBartext>
        </SearchBarContent>

        <SearchBarInput reversed={reversed} type="text" onChange={handleChange} matchValue={matchValue} isMatch={isMatch} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}>

        </SearchBarInput>
    </SearchBarCont>
  )
}

export default SearchBar
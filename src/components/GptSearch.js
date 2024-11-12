import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchaBar from './GptSearchaBar'
import { BackgroundImage } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
    <div className='absolute -z-10'>
        <img src= {BackgroundImage} alt='background'/>
    </div>
      <GptSearchaBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch

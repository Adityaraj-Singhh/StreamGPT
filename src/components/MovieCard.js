import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div>
      <img alt ="Poster" src={IMG_CDN_URL + posterPath }/>
    </div>
  )
}

export default MovieCard;
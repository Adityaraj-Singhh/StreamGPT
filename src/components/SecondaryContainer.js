import React from 'react' //rafce
import MovieList from './MovieList'
import {useSelector} from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)

  return (
    <div>
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        {/*
            MovieList - Popular
              MovieCards * n
            MovieList - Now Playing
            MovieList - Popular
            MovieList - Trending
            MovieList - Horror


        */}
    </div>
  )
}

export default SecondaryContainer

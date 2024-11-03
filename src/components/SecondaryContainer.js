import React from 'react' //rafce
import MovieList from './MovieList'
import {useSelector} from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)

  return (
    movies.nowPlayingMovies &&(
    <div className='bg-black'>
    <div className='-mt-52 pl-12 relative z-10'>
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
    <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
    <MovieList title={"Upcoming"} movies={movies.upcomingMovies}/>
    <MovieList title={"Popular"} movies={movies.PopularMovies}/>
    <MovieList title={"Comedy"} movies={movies.nowPlayingMovies}/>
    </div>
    
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
  )
}

export default SecondaryContainer

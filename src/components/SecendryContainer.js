import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecendryContainer = () => {
  const movies = useSelector((state) => state.movies?.movies); 
  const populerMovies = useSelector((state) => state.movies?.popular); 
  const topRated = useSelector((state) => state.movies?.topRated);
  const upcoming = useSelector((state) => state.movies?.upcoming);    
  if(!movies) return;
  console.log(movies);
  return (
    <>
  <div className=''>
      <div className='-mt-48 bg-gradient-to-t from-black to-transparent'>
        <MovieList title={"Now Playing Movie"} data={movies}/>
        <MovieList title={"Populer Movies"} data={populerMovies}/>
        <MovieList title={"Top Rated Movies"} data={topRated}/>
        <MovieList title={"Upcoming Movies"} data={upcoming}/>
      </div>
    </div>
    </>
  )
}

export default SecendryContainer
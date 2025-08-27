import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import MainVideo from './MainVideo';


const MainContainer = () => {
    const movies = useSelector((state) => state.movies?.movies);
    if(!movies) return;

    const mainMovie = movies[19];
    const {overview, title , id} = mainMovie;
    
    
  return (
    <>
    <div className='relative'>
    <div className='absolute bg-gradient-to-r from-black to-transparent aspect-video content-center'> <VideoTitle overview={overview} title={title}/></div>
    <MainVideo movieID={id}/>
    </div>
    </>
  )
}

export default MainContainer
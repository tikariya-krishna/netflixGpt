import { useEffect } from 'react';
import { OPRTIONS } from '../utlis/constent';
import { useDispatch } from 'react-redux';
import { addTrailer } from '../utlis/redux/moviesSlice';

const useTrailer = ( movieID ) => {
    
    const dispatch = useDispatch();

    const getMovieVideo = async() => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, OPRTIONS)
        const data = await response.json();
        
        if(data.results.length > 0){
            // setVideoKey(data.results[0].key);
            dispatch(addTrailer(data.results[0]));
        }
    }

    useEffect(() => {
        getMovieVideo();
    },[]);
}
export default useTrailer;
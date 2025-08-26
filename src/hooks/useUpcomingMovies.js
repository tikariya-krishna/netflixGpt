import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcoming } from "../utlis/redux/moviesSlice.js";
import { OPRTIONS } from "../utlis/constent.js";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const movieList = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', OPRTIONS)
    const json = await data.json();
    

    if(json.results){
      dispatch(addUpcoming(json.results));  
    }
  }

    useEffect(()=>{
    movieList();
  },[])
}
export default useUpcomingMovies;
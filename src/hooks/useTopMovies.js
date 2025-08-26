import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utlis/redux/moviesSlice.js";
import { OPRTIONS } from "../utlis/constent.js";

const useTopMovies = () => {
  const dispatch = useDispatch();
  const movieList = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', OPRTIONS)
    const json = await data.json();
    

    if(json.results){
      dispatch(addTopRated(json.results));  
    }
  }

    useEffect(()=>{
    movieList();
  },[])
}
export default useTopMovies;
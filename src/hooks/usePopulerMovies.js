import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPopulerMovies } from "../utlis/redux/moviesSlice.js";
import { OPRTIONS } from "../utlis/constent.js";

const usePopulerMovies = () => {
  const dispatch = useDispatch();
  const movieList = async() =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', OPRTIONS)
    const json = await data.json();
    

    if(json.results){
      dispatch(addPopulerMovies(json.results));  
    }
  }

    useEffect(()=>{
    movieList();
  },[])
}
export default usePopulerMovies;
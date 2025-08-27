import {POSTERURL} from '../utlis/constent.js'

const MovieCard = ({ data }) => {
  return (
    <>
    <img src={POSTERURL + data.poster_path} alt='PosterIamge' className='w-48 rounded-md'/>
    </>
  )
}

export default MovieCard
import {POSTERURL} from '../utlis/constent.js'

const MovieCard = ({ data }) => {
    console.log(data)
  return (
    <>
    <img src={POSTERURL + data.poster_path} alt='PosterIamge' className='w-48 '/>
    </>
  )
}

export default MovieCard
import { BGURL } from '../utlis/constent'
import SearchBarGpt from './SearchBarGpt'
import GptMoviesSuggestion from './GptMoviesSuggestion'

const GptSearch = () => {
  return (
    <>
    <div>
      <img src={BGURL} alt='Background Iamge' className='absolute -z-10'/>
      <div className='pt-24'>
      <SearchBarGpt/>
      <GptMoviesSuggestion/>
      </div>
    </div>
    </>
  )
}

export default GptSearch
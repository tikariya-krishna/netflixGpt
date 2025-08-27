import Header from './Header'
import usePeopleList from '../hooks/usePeopleList'
import MainContainer from './MainContainer';
import SecendryContainer from './SecendryContainer';
import usePopulerMovies from '../hooks/usePopulerMovies';
import useTopMovies from '../hooks/useTopMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => {
  usePeopleList();
  usePopulerMovies();
  useTopMovies();
  useUpcomingMovies();
 const gptSearch = useSelector((store)=> store.gpt?.showGptSearch )
 

  return (
    <>
      <div className=' text-white'>
        <Header/>
        {gptSearch === true ? <GptSearch/> : <> <MainContainer/> <SecendryContainer/> </>}
      </div>
    </>
  )
}

export default Browse
import Header from './Header'
import usePeopleList from '../hooks/usePeopleList'
import MainContainer from './MainContainer';
import SecendryContainer from './SecendryContainer';
import usePopulerMovies from '../hooks/usePopulerMovies';
import useTopMovies from '../hooks/useTopMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies'

const Browse = () => {
  usePeopleList();
  usePopulerMovies();
  useTopMovies();
  useUpcomingMovies();


  return (
    <>
      <div className='bg-black text-white'>
        <Header/>
        <MainContainer/>
        <SecendryContainer/>
      </div>
    </>
  )
}

export default Browse
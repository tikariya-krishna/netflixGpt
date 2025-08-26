import Header from './Header'
import usePeopleList from '../hooks/usePeopleList'
import MainContainer from './MainContainer';
import SecendryContainer from './SecendryContainer';

const Browse = () => {
  usePeopleList();

  return (
    <>
        <Header/>
        <MainContainer/>
        <SecendryContainer/>
    </>
  )
}

export default Browse
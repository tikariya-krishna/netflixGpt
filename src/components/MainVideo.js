import useTrailer from "../hooks/useTrailer"
import { useSelector } from "react-redux"
const MainVideo = ({ movieID }) => {
  
  const trailerVideo = useSelector((state) => state.movies?.trailer);
  useTrailer(movieID);
  return (
    <>
    <div>
    <iframe className='w-full aspect-video' src={`https://www.youtube.com/embed/` + trailerVideo.key + '?&autoplay=1&mute=0'} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
    </div>
    </>
  )
}

export default MainVideo


const VideoTitle = ({ overview , title }) => {
  return (
    <>
    <div className="text-white p-4 pl-20 w-1/3  flex flex-col gap-4">
      <p className="text-4xl font-bold">{title}</p>
      <p className="">{overview}</p>
      <div>
      <button className="hover:opacity-70 bg-white text-black px-6 py-2 rounded-md font-semibold"><i className="fa-solid fa-play"></i> Play</button>
      <button className="hover:opacity-70 bg-gray-700 text-white px-4 py-2 rounded-md font-semibold ml-4"><i className="fa-solid fa-circle-info"></i> More Info</button>
      </div>
    </div>
    </>
  )
}

export default VideoTitle
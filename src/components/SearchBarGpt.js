import React from 'react'

const SearchBarGpt = () => {
  return (
    <>
    <form>
        <div className='bg-[#303030] w-1/2 mx-auto flex rounded-lg p-3'>
        <input type='text' name='prompt' className=' w-full bg-transparent focus:outline-none' placeholder='Ask your movie...'/>
        <button className='p-2 text-white bg-purple-800 rounded-lg'><i class="fa-solid fa-arrow-down"></i></button>
        </div>
    </form>
    </>
  )
}

export default SearchBarGpt
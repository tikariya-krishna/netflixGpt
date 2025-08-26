import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, data }) => {
  return (
    <section className="px-6 py-4">

      {/* Scrollable Row */}
      <div className="relative">
        <h2 className="text-2xl  font-semibold mb-3">
        {title}
      </h2>
        <div className="flex overflow-x-scroll scrollbar-hide gap-4 scroll-smooth">
          {data?.map((movie) => (
            <MovieCard 
              key={movie.id} 
              data={movie} 
              className="transition-transform transform hover:scale-105 hover:shadow-lg duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MovieList

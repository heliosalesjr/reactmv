import React from 'react'
import MovieCard from '../components/MovieCard'

const Home = () => {

    const movies = [
        {
            id: 1,
            title: 'Movie 1',
            release_date: '2023-01-01',
            url: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            title: 'Movie 2',
            release_date: '2023-02-01',
            url: 'https://via.placeholder.com/150'
        },
        {
            id: 3,
            title: 'Movie 3',
            release_date: '2023-03-01',
            url: 'https://via.placeholder.com/150'
        }
    ]
    
  return (
    
    <div className="home">
        <div className='movies-grid'>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
    
    </div>
  )
}

export default Home
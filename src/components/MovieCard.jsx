import React from 'react'

const MovieCard = ( {movie } ) => {
    
    function onFavoriteClick() {
        console.log('Added to favorites:', movie.title);
    }
  
    return (
    <>
        <div className="movie-card">
            <div className='movie-poster'>
                <img src={movie.url} alt={movie.title}/>
                <div className='movie-overlay'>
                    <button className='favorite-btn' onClick={onFavoriteClick}>❤️</button>
                </div>
            </div>
        </div>
        <div>
            <h3>{movie.title}</h3>
            <p>{movie.release_date}</p>
        </div>
    </>
  )
}

export default MovieCard
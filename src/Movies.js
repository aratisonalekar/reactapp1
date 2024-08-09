import React from 'react';
import { useGlobalContext } from './context';
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const { movie } = useGlobalContext();
  return (
    <section className= "movie-page">
      <div className= "grid grid-4-col">
        {movie.map((curMovies) => {
        
        const { imdbID, Title, Poster } = curMovies;
        return <NavLink to={`movie/${imdbID}`}>
          <div className="card">
            <div className="card-info">
              <h2>{Title}</h2>
              <img src={Poster} alt={imdbID} />
            </div>
          </div>
        </NavLink>; 
      })}
      </div>
    </section>
  );
};

export default Movies;

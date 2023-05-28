import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import MovieCard from './MovieCard';

export default function Home() {
  const [Movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.tvmaze.com/search/shows?q=avengers')
      .then(res => setMovies(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      {!Movies.length ? (
        <h1 className='text-center'>
          <span className='strong'>Loading...</span>
        </h1>
      ) : (
        <>
          <h1 className='strong text-center' style={{ width: '100vw' }}>
            Avengers Collection
          </h1>
          <br />
          <div className='wrapper'>
            <div className='grid grid--gaps grid--cols-3 text-center' style={{ justifyContent: 'center' }}>
              {Movies.map(movie => (
                <MovieCard key={movie.show.id} showData={movie.show} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

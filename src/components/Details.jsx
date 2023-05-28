import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Details() {
  const [Movie, setMovie] = useState([]);
  const movieId = useParams().id;

  useEffect(() => {
    axios
      .get('https://api.tvmaze.com/shows/' + movieId)
      .then(res => setMovie(res.data))
      .catch(err => {
        console.log(err);
        setMovie(err);
      });
  }, []);

  return (
    <div style={{ width: '100vw' }}>
      {Movie.message && <h1>Error: {Movie.message}</h1>}
      {Movie.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        Movie.id && (
          <div className='wrapper'>
            <div className='grid grid--gaps grid--cols-2 text-center'>
              <div className='grid-cell'>
                {Movie.image?.original && (
                  <img style={{ maxWidth: '450px' }} src={Movie.image ? Movie.image.original : '/react.svg'} />
                )}
              </div>
              <div className=''>
                {Movie.name && <h1>{Movie.name}</h1>}
                <p>Language: {Movie.language}</p>
                {Movie.genres && <p>Genres: {Movie.genres.join(' | ')}</p>}
                {Movie.runtime && <p>Runtime: {Movie.runtime}</p>}
                {Movie.premiered && <p>Premiered: {Movie.premiered}</p>}
                {Movie.rating?.average && <p>Rating: {Movie.rating.average}</p>}
                {Movie.network?.country?.name && <p>Network: {Movie.network.country.name}</p>}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

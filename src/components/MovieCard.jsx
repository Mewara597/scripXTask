/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';

export default function MovieCard({ showData: { id, name, language, genres, runtime, premiered, dvdCountry, image } }) {
  const convertDate = date => {
    const [_year, _month, _day] = date.split('-');
    function english_ordinal_suffix(date) {
      return date % 10 === 1 && date !== 11
        ? 'st'
        : date % 10 === 2 && date !== 12
        ? 'nd'
        : date % 10 === 3 && date !== 13
        ? 'rd'
        : 'th';
    }
    function getMonth(month) {
      return new Date('2020-' + month + '-28').toLocaleString('en-IN', {
        month: 'long',
      });
    }
    return `${Number(_day) + english_ordinal_suffix(_day)} ${getMonth(_month)}, ${_year}`;
  };

  return (
    <div className='grid-cell'>
      <div className='Demo'>
        <div>
          <img src={image ? image.medium : '/react.svg'} />
          <NavLink to={'/tv-shows/details/' + id}>
            <h2 className='strong'>{name}</h2>
          </NavLink>
          <h4>Premiered: {convertDate(premiered)}</h4>
          {runtime && <span>Runtime: {runtime}</span>}
          <p>Language: {language}</p>
          {dvdCountry && <span>Region: {dvdCountry}</span>}
          <p>{genres.map((g, i) => g + (i !== genres.length - 1 ? ', ' : '.'))}</p>
        </div>
      </div>
    </div>
  );
}

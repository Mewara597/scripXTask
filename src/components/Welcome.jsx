import { NavLink } from 'react-router-dom';

export default function Welcome() {
  return (
    <h2 className='strong'>
      Welcome to ScripX &nbsp;
      <NavLink to='tv-shows/avengers'>Explore Avengers Collection</NavLink>
    </h2>
  );
}

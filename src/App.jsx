import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Details from './components/details';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/tv-shows/avengers' element={<Home />} />
          <Route path='/tv-shows/details/:id' element={<Details />} />
          <Route path='*' element={<h1>404 Not Found! 🙄</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

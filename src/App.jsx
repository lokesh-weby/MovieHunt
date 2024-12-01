import { Route,Routes } from 'react-router-dom';
import Movielist from './components/movielist';
import MovieDetails from './components/MovieDetails';
import Nav from './components/nav'
function App() {
  return (
    <>
      <Nav/>
    <Routes>
      <Route path="/" element={<Movielist title="MovieHunt" API_ENDPOINT="movie/now_playing"/>}/>
      <Route path="/movies/popular" element={<Movielist title="Popular Movie" API_ENDPOINT="movie/popular"/>}/>
      <Route path="/movies/top" element={<Movielist title="Top Movies" API_ENDPOINT="movie/top_rated"/>}/>
      <Route path="/movies/upcoming" element={<Movielist title="Upcoming Movies" API_ENDPOINT="movie/upcoming"/>}/>
      <Route path="/movies/:id" element={<MovieDetails title="Movie"/>}/>
      <Route path="*" element={<Movielist title="404 Not Found"/>}/>
    </Routes>
    </>
  );
}

export default App;

import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { MoviesList } from './components/MoviesList';
import { MovieService } from './services/MovieService';
import { MoviesContainer } from './styles/MoviesContainer';

function App() {

  const [movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    const { data } = await MovieService.getMovies();
    setMovies(data.results)
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="App">
      <Header />
      <MoviesContainer>
        <MoviesList movies={movies} />
      </MoviesContainer>
    </div>
  );
}

export default App;

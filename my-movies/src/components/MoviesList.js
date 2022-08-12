import { MoviesListContainer } from "../styles/MoviesListContainer";
import { MovieItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
    <MoviesListContainer>
        <ul>
            {movies.map(movie => <MovieItem title={movie.title} />)}
        </ul>
    </MoviesListContainer>
)
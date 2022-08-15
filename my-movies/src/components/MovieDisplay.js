import { MovieDisplayContainer } from "../styles/MovieDisplayContainer"


export const MovieDisplay = ({ movie }) => {
    return (
        <MovieDisplayContainer>
            <div>
                <h1>{movie.title}</h1>
                <br />
                <article>
                    {movie.overview}
                </article>
            </div>
        </MovieDisplayContainer>
    )
}
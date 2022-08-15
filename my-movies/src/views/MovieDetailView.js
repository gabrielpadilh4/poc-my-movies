import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { MovieService } from '../services/MovieService';
import { useParams } from 'react-router-dom';
import { MovieDisplay } from "../components/MovieDisplay";

export const MovieDetailView = () => {

    const { id } = useParams()

    const [movie, setMovie] = useState([])

    const fetchMovie = async () => {
        const { data } = await MovieService.getMovieById(id);
        setMovie(data)
    }

    useEffect(() => {
        fetchMovie();
    }, []);

    return (
        <div>
            <Header />
            <MovieDisplay movie={movie} />
        </div>
    )
}
import React, { useEffect, useState } from 'react'
import { api } from '../services/api';
import { MovieCard } from './MovieCard'

interface MovieProps {
    Title: string;
    Poster: string;
    Ratings: Array<{
        Source: string;
        Value: string;
    }>;
    Runtime: string;
}

interface MovieListProps {
    genreId: number;
}

export default function MovieList({ genreId }: MovieListProps) {
    const [movies, setMovies] = useState<MovieProps[]>([]);

    useEffect(() => {
        api.get<MovieProps[]>(`movies/?Genre_id=${genreId}`).then(response => {
            setMovies(response.data);
        });
    }, [genreId]);

    return (
        <div className="movies-list">
            {movies.map((movie: MovieProps) => (
                <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
        </div>
    )
}

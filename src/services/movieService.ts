import { Movie } from "../repositories/interfaces/movie.interface";
import { movieRepository } from "../repositories/MovieRepository";

class MovieService {
    async createMovie(movieData:Movie) : Promise<Movie> {
        const movie = await movieRepository.create(movieData);
        return movie;
    }
    async getAllMovies() : Promise<Movie[]>{
        const movies = await movieRepository.getAll();
        return movies;
    }
    async getSingleMovie(movieId: any): Promise<Movie | null> {
        const movie = await movieRepository.getSingle(movieId);
        return movie;
    }
}

export const movieService = new MovieService();
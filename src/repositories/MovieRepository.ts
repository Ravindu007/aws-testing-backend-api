import { CoreRepository } from "./core-repositroy";
import { Movie } from "./interfaces/movie.interface";

class MovieRepository extends CoreRepository{
    async create(movie: Movie):Promise<Movie>{
        return await new this.dbContext.Movie(movie).save();
    }

    async getAll():Promise<Movie[]>{
        return await this.dbContext.Movie.find({});
    }

    async getSingle(movieId:any): Promise<Movie | null>{
        const movie = await this.dbContext.Movie.findById(movieId);
        if(movie){
            return movie;
        }else{
            return null
        }
    }
}

export const movieRepository = new MovieRepository();
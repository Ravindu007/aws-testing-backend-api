import { Request, Response } from "express";
import { handleError, handleSuccess } from "../helpers/response.helper";
import { Movie } from "../repositories/interfaces/movie.interface";
import { movieService } from "../services/movieService";
import logger from "../helpers/logger.helper";

class MovieController{

  public createMovie = async(req:Request, res:Response): Promise<void> => {
    try {
        const movie: Movie = req.body;
        const newMovie = await movieService.createMovie(movie);
        logger.info(`Movie Added successfully ${newMovie}`)
        handleSuccess(res, "Movie Added Successfully", newMovie);
    } catch (error:any) {
        handleError(res, error);
    }
  }

  public getAllMovies = async(req:Request, res:Response): Promise<void> => {
    try {
      const movies = await movieService.getAllMovies();
      logger.info(`Movies retrieved successfully ${movies}`)
      handleSuccess(res, "Movies retrieved successfully", movies)
    } catch (error: any) {
      handleError(res, error)
    }
  }

  public getSingleMovie = async(req:Request, res:Response): Promise<void> => {
    try {
      const {id} = req.params; 
      const singleMovie = await movieService.getSingleMovie(id);
      handleSuccess(res, "Single Movie Successfully retrived", singleMovie)
    } catch (error:any) {
      handleError(res,error);
    }
  }
}

export const movieController  = new MovieController();
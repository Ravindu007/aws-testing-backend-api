import mongoose, { Model } from "mongoose";
import { Movie } from "../../repositories/interfaces/movie.interface";
import { MovieSchema } from "../../repositories/schemas/movie-schema";


export default class DBContext{
    private static dbContext: DBContext; 

    // schema
    public readonly Movie: Model<Movie> = mongoose.model<Movie>('Movie', MovieSchema, 'Movie');

    private constructor(){

    }

    public static initialize(): DBContext{
        if(!DBContext.dbContext){
            DBContext.dbContext = new DBContext();
        }
        return DBContext.dbContext;
    }

}
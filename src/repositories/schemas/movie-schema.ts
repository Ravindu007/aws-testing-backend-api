import { Schema } from "mongoose";
import { Movie } from "../interfaces/movie.interface";

export const MovieSchema: Schema<Movie> = new Schema<Movie>({
    name: {type:String, required:true},
    year: {type:Number, required:true},
    genre: {type:String, required:true},
    imdb: {type:Number, required:true},
    isDeleted: {type:Boolean, required:true, default:false},
})
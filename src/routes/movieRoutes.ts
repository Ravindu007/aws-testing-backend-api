import express from 'express';
import { movieController } from '../controllers/movieController';


const movieRouter = express.Router();

// Routes related to students
movieRouter.post("/addMovie", movieController.createMovie);
movieRouter.get("/allMovies", movieController.getAllMovies);
movieRouter.get("/getSingleMovie/:id", movieController.getSingleMovie);

export default movieRouter;
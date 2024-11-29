import express, { Request, Response } from 'express';
import movieRouter from './movieRoutes';

const baseRouter = express.Router();

// default router
baseRouter.get("/health", (req: Request, res: Response) => {
    const msg = {
        success: true,
        message: `API is up and running on ${process.env.ENV_NAME}`
    };
    res.status(200).json(msg);
});

// routes
baseRouter.use("/movie", movieRouter);

export default baseRouter;
import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import baseRouter from './routes/baseRoute';
import { initDBConnection } from './core/config/init-db-connection';

const app = express();

// database connection
initDBConnection()

// middleware
app.use(cors())
app.use(express.json())

// baseRoue
app.use("/api/v1", baseRouter)

app.listen(process.env.PORT, ()=>{
  console.log("Server is running on port:", process.env.PORT);
})

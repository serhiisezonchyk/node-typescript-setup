import cors from 'cors';
import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import { loggingHandler } from './middlewares/loggingHandler';
import { routeNotFound } from './middlewares/routeNotFound';
import './utils/logger';
dotenv.config();

const app: Express = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Log all routes
app.use(loggingHandler);

/*
  Your routes here
*/
app.get('/hi', (req: Request, res: Response) => {
  res.status(200).json(`Express`);
});

//Log not found routes
app.use(routeNotFound);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`[server]: Server is running at http://localhost:${port}`);
});

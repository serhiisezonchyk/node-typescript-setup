import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const arr: number[] = [1, 2, 3, 4, 5];
app.get('/', (req: Request, res: Response) => {
  res.send(`Express ${arr.at(1)}`);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

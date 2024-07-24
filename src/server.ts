import 'dotenv/config';
import express, { Request, Response } from 'express';

const server = express();

server.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
})

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando: http://localhost:${process.env.PORT}`)
})
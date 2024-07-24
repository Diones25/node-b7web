import 'dotenv/config';
import express, { Request, Response } from 'express';
import helmet from 'helmet';
import path from 'path';

const server = express();

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../public')));

server.get('/', (req: Request, res: Response) => {
  res.json('Hello world!');
})

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando: http://localhost:${process.env.PORT}`)
})
import { Request, Response, Router } from 'express';
import interferir from '../middlewares/interferir';

const router = Router();

router.use(interferir);

router.get('/', (req: Request, res: Response) => {
  res.json('Hello world!');
})

router.get('/ping', (req: Request, res: Response) => {
  console.log("executou o ping")
  res.json({ pong: true });
})

export default router;
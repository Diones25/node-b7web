import { Request, Response } from "express";
import z from 'zod';

const createUser = (req: Request, res: Response) => {
  const userSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    age: z.number().min(18).max(120)
  })  

  const validate = userSchema.safeParse(req.body);

  if (!validate.success) {
    return res.json({ error: 'Dados inválidos' })
  }

  const { name, email, age } = validate.data;

  console.log(name, email, age)

  res.status(201).json({ result: 'Tudo Ok' })
}

export default {
  createUser
}
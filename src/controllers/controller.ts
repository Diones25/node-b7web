import { Request, Response } from "express";
import z from 'zod';
import { jsonplaceholderResponseSchema } from "../schemas/jsonplaceholderResponseSchema";

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

const getPosts = async (req: Request, res: Response) => {
  const request = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await request.json();

  const validate = jsonplaceholderResponseSchema.safeParse(data);
  
  if (!validate.success) {
    return res.status(500).json({ error: 'Ocorreu um erro interno' })
  }

  const totalPosts = validate.data.length;

  console.log(validate)

  res.json({ total: totalPosts })

}

export default {
  createUser,
  getPosts
}
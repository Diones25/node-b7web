import { RequestHandler } from "express";

const interferir: RequestHandler = (req, res, next) => {
  const logged = false;

  if (logged) {
    next()
  }
  else {
    return res.status(403).json({ error: "Middleware não permitiu" });
  }
} 

export default interferir;
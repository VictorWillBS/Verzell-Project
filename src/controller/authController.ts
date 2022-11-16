import { Request, Response } from 'express';
import authService from '../Services/authService';
async function signUp(req: Request, res: Response) {
  const body = req.body;
  const userCreate = await authService.createUser(body);
  res.status(201).send(userCreate);
}

async function signIn(req: Request, res: Response) {
  const body = req.body;
  const userLogged = await authService.login(body);
  res.status(200).send(userLogged);
}

export default {
  signUp,
  signIn
};

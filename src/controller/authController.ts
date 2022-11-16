import { Request, Response } from "express";
import authService from "../Services/authService";
async function signUp(req:Request, res:Response ){
  const body = req.body;
  const userCreate = await authService.createUser(body);
  res.status(201).send(userCreate)
}
export default {
  signUp
}
import { User } from "@prisma/client";



export interface IUserData {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;

}

export type IUserId = Pick <User,"id">
export type ICreateUser = Omit <User,"id"|"createdAt">
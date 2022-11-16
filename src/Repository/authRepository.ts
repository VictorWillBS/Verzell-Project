import prisma from "../database/database";
import { ICreateUser } from "../Types/authTypes";

async function insertUser(userData:ICreateUser) {
  const userCreated = await prisma.user.create({data:{...userData}});
  return userCreated
}
async function  getByEmail(email:string) {
  const user = await prisma.user.findUnique({ where: { email } })
  return user
}
export default {
  insertUser,
  getByEmail
}
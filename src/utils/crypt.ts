import bcrypt from "bcrypt";
import dotenv from "dotenv";
dotenv.config();





function encriptByHash(data: string) {
  const dataEncript: string = bcrypt.hashSync(data, 10);
  return dataEncript;
}

function compareHash(toCompare: string, dataEncript: string) {
  const isSame: boolean = bcrypt.compareSync(toCompare, dataEncript);
  return isSame;
}

export default {
  encriptByHash,
  compareHash
};
import crypt from '../utils/crypt';
import { IUserData } from '../Types/authTypes';
import tokenFunctions from '../utils/tokenFunctions';
import authRepository from '../Repository/authRepository';

async function createUser(userData: IUserData) {
  if (userData.confirmPassword !== userData.password) {
    throw { code: 'Bad_Request', message: 'Passwords Is Not Same.' };
  }
  const userExist = await authRepository.getByEmail(userData.email);
  if (userExist) {
    throw { code: 'Conflict', message: 'User Already Exist.' };
  }
  const passwordEncripted = crypt.encriptByHash(userData.password);
  const createUser = {
    name: userData.name,
    email: userData.email,
    password: passwordEncripted
  };
  const userCreated = await authRepository.insertUser(createUser);
  return { email: userCreated.email, name: userCreated.name };
}

export default {
  createUser
};

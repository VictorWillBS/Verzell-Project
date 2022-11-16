import crypt from '../utils/crypt';
import { ILogin, IUserData } from '../Types/authTypes';
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

async function login(loginData: ILogin) {
  const user = await authRepository.getByEmail(loginData.email);
  if (!user) {
    throw { code: 'Not_Found', message: 'Email or Password is Incorrect.' };
  }
  const isPassword = crypt.compareHash(loginData.password, user.password);
  if (!isPassword) {
    throw { code: 'Not_Found', message: 'Email or Password is Incorrect.' };
  }
  const token = tokenFunctions.createJWT({ id: user.id }, { expiresIn: '1h' });

  return { email: user.email, name: user.name, token };
}

export default {
  createUser,
  login
};

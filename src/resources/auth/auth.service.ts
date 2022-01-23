import { Forbidden } from 'http-errors';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../users/user.model';
import { JWT_SECRET_KEY } from '../../common/config';

export const login = async (data: {
  login: string;
  password: string;
}): Promise<{ token: string }> => {
  const user = await getRepository(User).findOne({
    where: { login: data.login },
  });

  if (!user) {
    throw new Forbidden();
  }

  if (!bcrypt.compareSync(data.password, user.password)) {
    throw new Forbidden();
  }

  const token = jwt.sign(
    { userId: user.id, login: user.login },
    JWT_SECRET_KEY as string
  );

  return { token };
};

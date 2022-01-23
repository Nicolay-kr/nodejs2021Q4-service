import bcrypt from 'bcrypt';
import { userRepository } from '../users/user.memory.repository';

import { User } from '../users/user.model';

const findByCredentials = async (login: string, password: string): Promise<User | null> => {
  const user = await userRepository.findOne({ login });

  if (!user) return null;
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) return null;
  return user;
};

export default { findByCredentials };

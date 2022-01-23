import { define } from 'typeorm-seeding';
import {User} from '../../src/resources/users/user.model';
import { userRepository } from '../../src/resources/users/user.memory.repository';

define(User, () => {
  const user = {
    name: 'admin',
    login: 'admin',
    password: 'admin',
  } as Omit<User, 'id'>;

  return userRepository.create(user);
});

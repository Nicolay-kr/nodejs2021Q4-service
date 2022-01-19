import { Application } from 'express';
import { User } from "../resources/users/user.model";
import { postgresLoader } from './postgres';


export const loadersInit = async ({ expressApp }: { expressApp: Application }) => {
  await postgresLoader();

  const { userRepository } = await import('../resources/users/user.memory.repository');

  const newUser = new User();
    newUser.name = "Jane Doe";
    newUser.id = "1";
    newUser.login = "jane";
    newUser.password = '1234';
    await userRepository.save(newUser);

  const { expressLoader } = await import('./express');
  await expressLoader({ app: expressApp});
}
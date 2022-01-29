import { Application } from 'express';
import { postgresLoader } from './postgres';
import { User } from '../resources/users/user.model';


export const loadersInit = async ({ expressApp }: { expressApp: Application }) => {
  await postgresLoader();


  const {userRepository} = await import('../resources/users/user.memory.repository');
  const admin = new User();
  admin.name = 'TEST_USER';
  admin.login = 'test_user';
  admin.password = 'T35t_P@55w0rd';    
  await userRepository.save(admin);


  const { expressLoader } = await import('./express');
  await expressLoader({ app: expressApp});
}
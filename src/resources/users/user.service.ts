import { userRepository } from './user.memory.repository';
import {IUser} from './user.model'

/**
 * call the function getAll() from user.memory.repository.js
 * @returns {fuction} return call of function getAll() 
 */
const getAll = () => userRepository.find();
/**
 * call the function get(id) from user.memory.repository.js
 * @param {String} id user id
 * @returns {fuction} return call of function get(id) from user.memory.repository.js
 */
const get = (id:string) => userRepository.findOne(id);
/**
 * call the function remove(user) from user.memory.repository.js
 * @param {String} id user id
 * @returns {fuction} return call of function remove(user) from user.memory.repository.js 
 */
const remove = (id:string) => userRepository.delete(id);
/**
 * call the function save(user) from user.memory.repository.js
 * @param {String} id user id
 * @returns {fuction} return call of function save(user) from user.memory.repository.js 
 */
const save = async(newUser:IUser) => {
  const user = await userRepository.create(newUser);
  const results = await userRepository.save(user);
  userRepository.save(user)
  return results
};
/**
 * call the function update(id,user) from user.memory.repository.js
 * @param {String} id id of user
 * @param {Object} user object of user with updated data
 * @returns return call of function update(id,user) from user.memory.repository.js
 */
const update = async (id:string, updateUser:IUser) => {
  const currentUser = await userRepository.findOne(id);
  userRepository.merge(currentUser!, updateUser);
  await userRepository.save(updateUser!);
  return updateUser;
};

// export { getAll, get, remove, save, update };
export { getAll, get, remove, update, save };

import * as usersRepo from './user.memory.repository';

export {}
interface IUser {
    id: string,
    name: string,
    login: string,
    password: string
  }

/**
 * call the function getAll() from user.memory.repository.js
 * @returns {fuction} return call of function getAll() 
 */
const getAll = () => usersRepo.getAll();
/**
 * call the function get(id) from user.memory.repository.js
 * @param {String} id user id
 * @returns {fuction} return call of function get(id) from user.memory.repository.js
 */
const get = (id:string) => usersRepo.get(id);
/**
 * call the function remove(user) from user.memory.repository.js
 * @param {String} id user id
 * @returns {fuction} return call of function remove(user) from user.memory.repository.js 
 */
const remove = (id:string) => usersRepo.remove(id);
/**
 * call the function save(user) from user.memory.repository.js
 * @param {String} id user id
 * @returns {fuction} return call of function save(user) from user.memory.repository.js 
 */
const save = (user:IUser) => usersRepo.save(user);
/**
 * call the function update(id,user) from user.memory.repository.js
 * @param {String} id id of user
 * @param {Object} user object of user with updated data
 * @returns return call of function update(id,user) from user.memory.repository.js
 */
const update = (id:string, user:IUser) => usersRepo.update(id, user);

export { getAll, get, remove, save, update };

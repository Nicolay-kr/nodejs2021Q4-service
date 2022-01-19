import { boardRepository } from './board.memory.repository';
// import {IBoard} from './board.model'


/**
 * call the function getAll() from board.memory.repository.js
 * @returns {fuction} return call of function getAll() 
 */
 const getAll = () => boardRepository.find();
 /**
  * call the function get(id) from board.memory.repository.js
  * @param {String} id board id
  * @returns {fuction} return call of function get(id) from board.memory.repository.js
  */
 const get = (id:string) => boardRepository.findOne(id);
 /**
  * call the function remove(board) from board.memory.repository.js
  * @param {String} id board id
  * @returns {fuction} return call of function remove(board) from board.memory.repository.js 
  */
 const remove = (id:string) => boardRepository.delete(id);
 /**
  * call the function save(board) from board.memory.repository.js
  * @param {String} id board id
  * @returns {fuction} return call of function save(board) from board.memory.repository.js 
  */
//  const save = async(newUser:IUser) => {
//    const board = await boardRepository.create(newUser);
//    const results = await boardRepository.save(board);
//    boardRepository.save(board)
//    return results
//  };
 /**
  * call the function update(id,board) from board.memory.repository.js
  * @param {String} id id of board
  * @param {Object} board object of board with updated data
  * @returns return call of function update(id,board) from board.memory.repository.js
  */
//  const update = async (id:string, updateUser:IUser) => {
//    const currentUser = await boardRepository.findOne(id);
//    boardRepository.merge(currentUser!, updateUser);
//    await boardRepository.save(updateUser!);
//    return updateUser;
//  };
 
//  export { getAll, get, remove, update, save };
 export { getAll, get, remove};

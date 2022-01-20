import { boardRepository } from './board.memory.repository';
import {IBoard} from './board.model'


/**
 * call the function getAll() from board.memory.repository.js
 * @returns {fuction} return call of function getAll() 
 */
 const getAll = () => boardRepository.getAll();
 /**
  * call the function get(id) from board.memory.repository.js
  * @param {String} id board id
  * @returns {fuction} return call of function get(id) from board.memory.repository.js
  */
 const get = (id:string) => boardRepository.getBoardById(id);
 /**
  * call the function remove(board) from board.memory.repository.js
  * @param {String} id board id
  * @returns {fuction} return call of function remove(board) from board.memory.repository.js 
  */
 const remove = (id:string) => boardRepository.deleteBoardById(id);
 /**
  * call the function save(board) from board.memory.repository.js
  * @param {String} id board id
  * @returns {fuction} return call of function save(board) from board.memory.repository.js 
  */
 const save = async(newUser:IBoard) => boardRepository.addBoard(newUser);
 /**
  * call the function update(id,board) from board.memory.repository.js
  * @param {String} id id of board
  * @param {Object} board object of board with updated data
  * @returns return call of function update(id,board) from board.memory.repository.js
  */
 const update = async (id:string, updateBoard:IBoard)  => boardRepository.updateBoard(id, updateBoard);
 
 export { getAll, get, remove, save, update};

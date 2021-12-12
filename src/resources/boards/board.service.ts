import * as boardRepo from './board.memory.repository';

export{}

interface IColumn {
    id: string,
    title: string,
    order: number
  }
interface IBoard {
    id: string,
    title: string,
    columns: Array<IColumn>
  }

/**
 * call the function getAll() from board.memory.repository.js
 * @returns {fuction} return call of function getAll() 
 */
const getAll = () => boardRepo.getAll();
/**
 * call the function get(id) from board.memory.repository.js
 * @param {String} id board id
 * @returns {fuction} return call of function get(id) from board.memory.repository.js
 */
const get = (id:string) => boardRepo.get(id);
/**
 * call the function remove(board) from board.memory.repository.js
 * @param {String} id board id
 * @returns {fuction} return call of function remove(board) from board.memory.repository.js 
 */
const remove = (id:string) => boardRepo.remove(id);
/**
 * call the function save(board) from board.memory.repository.js
 * @param {String} id board id
 * @returns {fuction} return call of function save(board) from board.memory.repository.js 
 */
const save = (board:IBoard) => boardRepo.save(board);
/**
 * call the function update(id,board) from board.memory.repository.js
 * @param {String} id id of board
 * @param {Object} board object of board with updated data
 * @returns return call of function update(id,board) from board.memory.repository.js
 */
const update = (id:string, board:IBoard) => boardRepo.update(id, board);

export{ getAll, get, remove, save, update };

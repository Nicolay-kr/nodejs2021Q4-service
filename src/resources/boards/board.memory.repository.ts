import * as DB from'../../utils/db';

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
 * call the function getAllEntities(TABLE_NAME) from db.js which return object with all boards
 * @returns {fuction} return call of function DB.getAllEntities(TABLE_NAME) which return object with all boards
 */
const getAll = async () => DB.getAllBoards();
/**
 * call the function getboardById(id) from db.js which return object of define board
 * @param {String} id board id
 * @returns {fuction} return call of function DB.getboardById(id) which return object of the define board
 */
const get = async (id:string) => DB.getBoardById(id);
/**
 * call the function removeboard(id) from db.js which delete define board and it tasks from DB if he is in DB
 * @param {String} id board id
 * @returns {fuction} return call of function DB.removeboard(id) which delete define board 
 * and it task from DB if it is there, which return true if board is in DB and false if he isn't. 
 */
const remove = async (id:string) => DB.removeBoard(id);
/**
 * call the function saveboard(board) from db.js which save object of new board to DB
 * @param {Object} board object new board
 * @returns {fuction} return call of function DB.saveboard(board) which save new board 
 */
const save = async (board:IBoard) => DB.saveBoard(board);
/**
 * call the function updateboard(id, board) from db.js which update object of one define board in DB
 * @param {String} id id of board
 * @param {Object} board object of board with updated data
 * @returns return call of function DB.updateboard(id, board) which update define board 
 */
const update = async (id:string, board:IBoard) => DB.updateBoard(id, board);

export{ getAll, get, remove, save, update };

const DB = require('../../utils/db');

const TABLE_NAME = 'Boards';

const getAll = async () => DB.getAllEntities(TABLE_NAME);

const get = async (id) => DB.getBoardById(id);

const remove = async (id) => DB.removeBoard(id);

const save = async (board) => DB.saveBoard(board);

const update = async (id, board) => DB.updateBoard(id, board);

module.exports = { getAll, get, remove, save, update };

const boardRepo = require('./board.memory.repository');

const getAll = () => boardRepo.getAll();
const get = (id) => boardRepo.get(id);
const remove = (board) => boardRepo.remove(board);
const save = (board) => boardRepo.save(board);
const update = (id, board) => boardRepo.update(id, board);

module.exports = { getAll, get, remove, save, update };

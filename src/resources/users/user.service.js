const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const get = (id) => usersRepo.get(id);
const remove = (user) => usersRepo.remove(user);
const save = (user) => usersRepo.save(user);
const update = (id, user) => usersRepo.update(id, user);

module.exports = { getAll, get, remove, save, update };
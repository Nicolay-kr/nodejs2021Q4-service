const tasksRepo = require('./task.memory.repository');

const getAll = () => tasksRepo.getAll();
const get = (id) => tasksRepo.get(id);
const remove = (task) => tasksRepo.remove(task);
const save = (task) => tasksRepo.save(task);
const update = (id, task) => tasksRepo.update(id, task);

module.exports = { getAll, get, remove, save, update };

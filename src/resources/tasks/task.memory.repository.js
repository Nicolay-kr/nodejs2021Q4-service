const DB = require('../../utils/db');

const TABLE_NAME = 'Tasks';

const getAll = async () => DB.getAllEntities(TABLE_NAME);

const get = async (id) => DB.getTaskById(id);

const remove = async (id) => DB.removeTask(id);

const save = async (task) => DB.saveTask(task);

const update = async (id, task) => DB.updateTask(id, task);

module.exports = { getAll, get, remove, save, update };


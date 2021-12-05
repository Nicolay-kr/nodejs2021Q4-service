const DB = require('../../utils/db');
// const NOT_FOUND_ERROR = require("")
const TABLE_NAME = 'Users';

const getAll = async () => DB.getAllEntities(TABLE_NAME);

const get = async (id) => {
  const user = await DB.getUserById(id);
  return user;
};

const remove = async (id) => DB.removeUser(id);

const save = async (user) => DB.saveUser(user);

const update = async (id, user) => DB.updateUser(id, user);

module.exports = { getAll, get, remove, save, update };

const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

const db = {
  Users: [],
};

// init DB

(() => {
  for (let i = 0; i < 3; i += 1) {
    db.Users.push(new User());
  }
  db.Boards.push(new Board());
  db.Tasks.push(new Task());
})();

// all

const getAllEntities = (tableName) => db[tableName];

// Users

const getUserById = (id) => db.Users.filter((user) => user.id === id)[0];

const saveUser = (user) => {
  const newUser = new User(user);
  db.Users.push(newUser);
  return newUser;
};

const updateUser = (id, userData) => {
  if (!db.Users.some((user) => user.id === id)) {
    return undefined;
  }
  db.Users = db.Users.filter((user) => user.id !== id);
  db.Users.push({ id, ...userData });
  return { id, ...userData };
};

const removeUser = (id) => {
  if (!db.Users.some((user) => user.id === id)) {
    return false;
  }
  db.Users = db.Users.filter((user) => user.id !== id);

  db.Tasks.forEach((task) => {
    const currentTask = task;
    if (currentTask.userId === id) {
      currentTask.userId = null;
    }
  });
  return true;
};


module.exports = {
  getAllEntities,

  getUserById,
  saveUser,
  updateUser,
  removeUser,

};

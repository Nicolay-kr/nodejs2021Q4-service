const User = require('../resources/users/user.model.ts');
const {Board} = require('../resources/boards/board.model.ts');
const {Task} = require('../resources/tasks/task.model.ts');

export{}


interface IUser {
  id: string,
  name: string,
  login: string,
  password: string
}
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
interface ITask {
  id?: string,
  title: string,
  order: number,
  description: string,
  boardId: string,
  columnId: string,
  userId: string|null,
}

interface IDb {
  Users: IUser[],
  Boards: IBoard[],
  Tasks: ITask[],
}

const db:IDb = {
  Users: [],
  Boards: [],
  Tasks: [],
};

// init DB
/**
 * create DB
 */
(() => {
  for (let i = 0; i < 3; i += 1) {
    db.Users.push(new User());
  }
  db.Boards.push(new Board());
  db.Tasks.push(new Task());
})();

// all

/**
 * Returns array of users
 * @returns {Object} object of users
 */
const getAllUsers = async () => db.Users;

// Users
/**
 * return object of user with define id
 * @param {String} id string id of user
 * @returns {Object} object of user with define id
 */
const getUserById = (id:string) => db.Users.filter((user) => user.id === id)[0];

/**
 * create new user and save him to DB
 * @param {Object} user object of new user 
 * @returns {Object} return object of new user
 */
const saveUser = (user:IUser) => {
  console.log(typeof user)
  const newUser = new User(user);
  db.Users.push(newUser);
  return newUser;
};
/**
 * update object of existed user and return object of user with update data
 * @param {String} id user id
 * @param {Object} userData  object of user with new parametrs
 * @returns {Object} return object of user with update data
 */
const updateUser = (id:string, userData:IUser) => {
  if (!db.Users.some((user) => user.id === id)) {
    return undefined;
  }
  db.Users = db.Users.filter((user) => user.id !== id);
  const muUser:IUser = {...userData} 
  muUser.id= id
  db.Users.push(muUser);
  return muUser;
};
/**
 * delete the defined user from DB and change the user.id field of elements of field Task of DB
 * @param {String} id user id
 * @returns {Boolen} returns true if user is in DB and false if it isn't
 */
const removeUser = (id:string) => {
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

// Boards

/**
 * Returns array of boards
 * @returns {Object} object of boards
 */
 const getAllBoards = async () => db.Boards;
/**
 * return object of board with define id
 * @param {String} id string id of board
 * @returns {Object} object of board with define id
 */
const getBoardById = (id:string) => db.Boards.filter((board) => board.id === id)[0];

/**
 * create new board and save him to DB
 * @param {Object} board object of new board 
 * @returns {Object} return object of new board
 */

const saveBoard = (board:IBoard) => {
  const newBoard = new Board(board);
  db.Boards.push(newBoard);
  return newBoard;
};

/**
 * update object of existed board and return object of board with update data
 * @param {String} id board id
 * @param {Object} boardData  object of board with new parametrs
 * @returns {Object} return object of board with update data
 */

const updateBoard = (id:string, boardData:IBoard) => {
  if (!db.Boards.some((board) => board.id === id)) {
    return undefined;
  }
  db.Boards = db.Boards.filter((board) => board.id !== id);
  const myBoard:IBoard = {...boardData} 
  myBoard.id = id
  db.Boards.push(myBoard);
  return myBoard;
};

/**
 * delete the defined board and  all tasks of current board from DB 
 * @param {String} id board id
 * @returns {Boolen} returns true if board is in DB and false if it isn't
 */

const removeBoard = (id:string) => {
  if (!db.Boards.some((board) => board.id === id)) {
    return false;
  }
  db.Boards = db.Boards.filter((board) => board.id !== id);
  db.Tasks = db.Tasks.filter((task) => task.boardId !== id);
  return true;
};

// Tasks
/**
 * Returns array of tasks
 * @returns {Object} object of tasks
 */
 const getAllTasks = async () => db.Tasks;
/**
 * return object of task with define id
 * @param {String} id string id of task
 * @returns {Object} object of task with define id
 */
const getTaskById = (id:string) => db.Tasks.filter((task) => task.id === id)[0];

/**
 * create new task and save him to DB
 * @param {Object} task object of new task 
 * @returns {Object} return object of new task
 */

const saveTask = (task:ITask) => {
  // console.log("task--->"+task);
  const newTask = new Task(task);
  db.Tasks.push(newTask);
  return newTask;
};

/**
 * update object of existed task and return object of task with update data
 * @param {String} id tasks id
 * @param {Object} taskData  object of task with new parametrs
 * @returns {Object} return object of task with update data
 */

const updateTask = (id:string, taskData:ITask) => {
  if (!db.Tasks.some((task) => task.id === id)) {
    return undefined;
  }
  db.Tasks = db.Tasks.filter((task) => task.id !== id);
  db.Tasks.push({ id, ...taskData });
  return { id, ...taskData };
};

/**
 * delete the defined task from DB
 * @param {String} id task id
 * @returns {Boolen} returns true if task is in DB and false if it isn't
 */

const removeTask = (id:string) => {
  if (!db.Tasks.some((task) => task.id === id)) {
    return false;
  }
  db.Tasks = db.Tasks.filter((task) => task.id !== id);
  return true;
};


export {
  getAllUsers,
  getUserById,
  saveUser,
  updateUser,
  removeUser,

  getAllBoards,
  getBoardById,
  saveBoard,
  updateBoard,
  removeBoard,

  getAllTasks,
  getTaskById,
  saveTask,
  updateTask,
  removeTask,

};

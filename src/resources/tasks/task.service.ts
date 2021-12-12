import * as tasksRepo from './task.memory.repository';

export{}

interface ITask {
    id?: string,
    title: string,
    order: number,
    description: string,
    boardId: string,
    columnId: string,
    userId: string|null,
  }
/**
 * call the function getAll() from task.memory.repository.js
 * @returns {fuction} return call of function getAll() 
 */
const getAll = () => tasksRepo.getAll();
/**
 * call the function get(id) from task.memory.repository.js
 * @param {String} id task id
 * @returns {fuction} return call of function get(id) from task.memory.repository.js
 */
const get = (id:string) => tasksRepo.get(id);
/**
 * call the function remove(task) from task.memory.repository.js
 * @param {String} id task id
 * @returns {fuction} return call of function remove(task) from task.memory.repository.js 
 */
const remove = (id:string) => tasksRepo.remove(id);
/**
 * call the function save(task) from task.memory.repository.js
 * @returns {fuction} return call of function save(task,boardId) from task.memory.repository.js 
 */
const save = (task:ITask) => tasksRepo.save(task);
/**
 * call the function update(id,task) from task.memory.repository.js
 * @param {String} id id of task
 * @param {Object} task object of task with updated data
 * @returns return call of function update(id,task) from task.memory.repository.js
 */
const update = (id:string, task:ITask) => tasksRepo.update(id, task);

export{ getAll, get, remove, save, update };

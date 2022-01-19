import { taskRepository } from './task.memory.repository';
import {ITask} from './task.model'

/**
 * call the function getAll() from task.memory.repository.js
 * @returns {fuction} return call of function getAll() 
 */
const getAll = () => taskRepository.find();
/**
 * call the function get(id) from task.memory.repository.js
 * @param {String} id task id
 * @returns {fuction} return call of function get(id) from task.memory.repository.js
 */
const get = (id:string) => taskRepository.findOne(id);
/**
 * call the function remove(task) from task.memory.repository.js
 * @param {String} id task id
 * @returns {fuction} return call of function remove(task) from task.memory.repository.js 
 */
const remove = (id:string) => taskRepository.delete(id);
/**
 * call the function save(task) from task.memory.repository.js
 * @returns {fuction} return call of function save(task,boardId) from task.memory.repository.js 
 */
const save = (task:ITask) => taskRepository.save(task);
/**
 * call the function update(id,task) from task.memory.repository.js
 * @param {String} id id of task
 * @param {Object} task object of task with updated data
 * @returns return call of function update(id,task) from task.memory.repository.js
 */
const update = (id:string, task:ITask) => taskRepository.update(id, task);

export{ getAll, get, remove, save, update };

import { taskRepository } from './task.memory.repository';
import {ITask} from './task.model'

/**
 * call the function getAll() from task.memory.repository.js
 * @returns {fuction} return call of function getAll() 
 */
const getAll = (boardId:string) => taskRepository.getAll(boardId);
/**
 * call the function get(id) from task.memory.repository.js
 * @param {String} id task id
 * @returns {fuction} return call of function get(id) from task.memory.repository.js
 */
const get = (boardId:string, id:string) => taskRepository.getTaskById(boardId, id);
/**
 * call the function remove(task) from task.memory.repository.js
 * @param {String} id task id
 * @returns {fuction} return call of function remove(task) from task.memory.repository.js 
 */
const remove = (boardId:string, id:string) => taskRepository.deleteTaskById(boardId, id);
/**
 * call the function save(task) from task.memory.repository.js
 * @returns {fuction} return call of function save(task,boardId) from task.memory.repository.js 
 */
const save = (boardId:string, task:ITask) => taskRepository.createTask(boardId, task);
/**
 * call the function update(id,task) from task.memory.repository.js
 * @param {String} id id of task
 * @param {Object} task object of task with updated data
 * @returns return call of function update(id,task) from task.memory.repository.js
 */
const update = (boardId:string, id:string, task:ITask) => taskRepository.updateTask(boardId, id, task);
const deleteTasksForParticularBoardId = (boardId: string) => taskRepository.deleteTaskForBoardId(boardId);
const unAssignUserId = (userId: string) => taskRepository.unAssignUserId(userId);
export{ getAll, get, remove, save, update, deleteTasksForParticularBoardId, unAssignUserId };

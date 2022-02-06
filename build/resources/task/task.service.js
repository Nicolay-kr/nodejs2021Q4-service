"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_entity_1 = require("./task.entity");
let TaskService = class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    getAll(boardId) {
        return this.taskRepository
            .createQueryBuilder('task')
            .where('task.boardId = :boardId', { boardId })
            .getMany();
    }
    async createTask(boardId, task) {
        const { generatedMaps } = await this.taskRepository
            .createQueryBuilder()
            .insert()
            .into(task_entity_1.TaskEntity)
            .values([{ ...task, boardId }])
            .execute();
        return this.getTaskById(generatedMaps?.[0]?.['boardId'], generatedMaps?.[0]?.['id']);
    }
    getTaskById(boardId, taskId) {
        return this.taskRepository
            .createQueryBuilder('task')
            .where('task.boardId = :boardId', { boardId })
            .andWhere('task.id = :taskId', { taskId })
            .getOne();
    }
    async updateTask(boardId, taskId, updatedTask) {
        await this.taskRepository
            .createQueryBuilder()
            .update(task_entity_1.TaskEntity)
            .set(updatedTask)
            .where('boardId = :boardId', { boardId })
            .andWhere('id = :taskId', { taskId })
            .execute();
        return this.getTaskById(boardId, taskId);
    }
    deleteTaskById(boardId, taskId) {
        return this.taskRepository
            .createQueryBuilder()
            .delete()
            .from(task_entity_1.TaskEntity)
            .where('boardId = :boardId', { boardId })
            .andWhere('id = :taskId', { taskId })
            .execute();
    }
    async unAssignUserId(userId) {
        return this.taskRepository
            .createQueryBuilder()
            .update(task_entity_1.TaskEntity)
            .set({ userId: null })
            .where('userId = :userId', { userId })
            .execute();
    }
    deleteTasksForParticularBoardId(boardId) {
        return this.taskRepository
            .createQueryBuilder()
            .delete()
            .from(task_entity_1.TaskEntity)
            .where('boardId = :boardId', { boardId })
            .execute();
    }
};
TaskService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(task_entity_1.TaskEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TaskService);
exports.TaskService = TaskService;

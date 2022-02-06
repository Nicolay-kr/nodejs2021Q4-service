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
exports.BoardController = void 0;
const common_1 = require("@nestjs/common");
const board_service_1 = require("./board.service");
const create_board_dto_1 = require("./dto/create-board.dto");
const update_board_dto_1 = require("./dto/update-board.dto");
const task_service_1 = require("../task/task.service");
const jwt_auth_guard_1 = require("../../auth/jwt-auth.guard");
let BoardController = class BoardController {
    constructor(boardService, taskService) {
        this.boardService = boardService;
        this.taskService = taskService;
    }
    getAll() {
        return this.boardService.getAll();
    }
    addNewBoard(createBoardDto) {
        return this.boardService.addNewBoard(createBoardDto);
    }
    async getBoardById(response, boardId) {
        const board = await this.boardService.getBoardById(boardId);
        if (board) {
            return response.status(common_1.HttpStatus.OK).send(board);
        }
        return response.status(common_1.HttpStatus.NOT_FOUND).send('not found');
    }
    updateBoard(boardId, updateBoardDto) {
        return this.boardService.updateBoard(boardId, updateBoardDto);
    }
    async deleteBoardById(boardId) {
        await this.boardService.deleteBoardById(boardId);
        this.taskService.deleteTasksForParticularBoardId(boardId);
    }
};
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BoardController.prototype, "getAll", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_board_dto_1.CreateBoardDto]),
    __metadata("design:returntype", void 0)
], BoardController.prototype, "addNewBoard", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get(':boardId'),
    __param(0, common_1.Res()),
    __param(1, common_1.Param('boardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "getBoardById", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Put(':boardId'),
    __param(0, common_1.Param('boardId')),
    __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_board_dto_1.UpdateBoardDto]),
    __metadata("design:returntype", void 0)
], BoardController.prototype, "updateBoard", null);
__decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Delete(':boardId'),
    __param(0, common_1.Param('boardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BoardController.prototype, "deleteBoardById", null);
BoardController = __decorate([
    common_1.Controller('boards'),
    __metadata("design:paramtypes", [board_service_1.BoardService,
        task_service_1.TaskService])
], BoardController);
exports.BoardController = BoardController;

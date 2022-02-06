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
exports.BoardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const board_entity_1 = require("./board.entity");
const column_entity_1 = require("./column.entity");
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
let BoardService = class BoardService {
    constructor(boardRepository) {
        this.boardRepository = boardRepository;
    }
    getAll() {
        return this.boardRepository
            .createQueryBuilder('board')
            .leftJoinAndSelect('board.columns', 'columns')
            .getMany();
    }
    async setNewBoardData(board, title, columns) {
        const connectionManager = typeorm_2.getConnection().manager;
        if (board) {
            board.title = title || board.title || '';
            await connectionManager.save(board);
            if (columns) {
                await Promise.all(columns.map(async ({ id: columnId, title: columnTitle, order }) => {
                    const column = new column_entity_1.ColumnEntity();
                    column.id = columnId;
                    column.title = columnTitle;
                    column.order = order;
                    column.board = board;
                    await connectionManager.save(column);
                }));
            }
        }
    }
    async addNewBoard({ title, columns }) {
        const board = new board_entity_1.BoardEntity();
        await this.setNewBoardData(board, title, columns);
        return this.getBoardById(board.id);
    }
    async getBoardById(id) {
        return this.boardRepository
            .createQueryBuilder('board')
            .leftJoinAndSelect('board.columns', 'columns')
            .where('board.id = :id', { id })
            .getOne();
    }
    async updateBoard(id, { title, columns }) {
        await this.deleteColumnsForParticularBoardId(id);
        const exBoard = await this.boardRepository
            .createQueryBuilder('board')
            .where('board.id = :id', { id })
            .getOne();
        if (exBoard) {
            await this.setNewBoardData(exBoard, title, columns);
            return this.getBoardById(id);
        }
        return null;
    }
    async deleteBoardById(id) {
        await this.deleteColumnsForParticularBoardId(id);
        return this.boardRepository
            .createQueryBuilder()
            .delete()
            .from(board_entity_1.BoardEntity)
            .where('id = :id', { id })
            .execute();
    }
    async deleteColumnsForParticularBoardId(id) {
        const columns = await this.boardRepository
            .createQueryBuilder()
            .relation(board_entity_1.BoardEntity, 'columns')
            .of(id)
            .loadMany();
        await Promise.all(columns.map(async ({ id: columnId }) => {
            await this.boardRepository
                .createQueryBuilder()
                .delete()
                .from(column_entity_1.ColumnEntity)
                .where('id = :id', { id: columnId })
                .execute();
        }));
    }
};
BoardService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(board_entity_1.BoardEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BoardService);
exports.BoardService = BoardService;

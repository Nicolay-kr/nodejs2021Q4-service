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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonConfigService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const user_entity_1 = require("../resources/user/user.entity");
const board_entity_1 = require("../resources/board/board.entity");
const column_entity_1 = require("../resources/board/column.entity");
const task_entity_1 = require("../resources/task/task.entity");
let CommonConfigService = class CommonConfigService {
    constructor(configService) {
        this.configService = configService;
    }
    get PORT() {
        return +this.configService.get('PORT') || 4000;
    }
    get OrmConfig() {
        return {
            type: 'postgres',
            host: this.configService.get('POSTGRES_HOST'),
            port: this.configService.get('POSTGRES_PORT'),
            username: this.configService.get('POSTGRES_USER'),
            password: this.configService.get('POSTGRES_PASSWORD'),
            database: this.configService.get('POSTGRES_DB'),
            logging: false,
            entities: [user_entity_1.UserEntity, board_entity_1.BoardEntity, column_entity_1.ColumnEntity, task_entity_1.TaskEntity],
            // If you are using migrations, synchronize should be set to false.
            synchronize: true,
            dropSchema: false,
            migrations: ['./src/migrations/**/*.ts'],
            migrationsRun: false,
            cli: {
                migrationsDir: 'src/migrations',
            },
        };
    }
};
CommonConfigService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], CommonConfigService);
exports.CommonConfigService = CommonConfigService;

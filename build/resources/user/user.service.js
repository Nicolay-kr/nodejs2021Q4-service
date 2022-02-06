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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = __importDefault(require("bcrypt"));
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./user.entity");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    getAll() {
        return this.userRepository.createQueryBuilder().getMany();
    }
    async createUser(user) {
        const userWithHashedPassword = {
            ...user,
            password: this.hashUserPassword(user.password),
        };
        const { identifiers, } = await this.userRepository
            .createQueryBuilder()
            .insert()
            .into(user_entity_1.UserEntity)
            .values([userWithHashedPassword])
            .execute();
        return this.getUserById(identifiers[0]?.['id']);
    }
    getUserById(id) {
        return this.userRepository
            .createQueryBuilder('user')
            .where('user.id = :id', { id })
            .getOne();
    }
    async updateUser(id, updatedUserData) {
        await this.userRepository
            .createQueryBuilder()
            .update(user_entity_1.UserEntity)
            .set(updatedUserData)
            .where('id = :id', { id })
            .execute();
        return this.getUserById(id);
    }
    deleteUserById(id) {
        return this.userRepository
            .createQueryBuilder()
            .delete()
            .from(user_entity_1.UserEntity)
            .where('id = :id', { id })
            .execute();
    }
    getUserByLogin(login) {
        return this.userRepository
            .createQueryBuilder('user')
            .where('user.login = :login', { login })
            .getOne();
    }
    hashUserPassword(password) {
        const { HASH_SALT } = process.env;
        if (HASH_SALT) {
            return bcrypt_1.default.hashSync(password, +HASH_SALT);
        }
        return '';
    }
    async createAdminUser() {
        const adminUser = await this.getUserByLogin('admin');
        if (!adminUser) {
            this.createUser({
                name: 'admin',
                login: 'admin',
                password: 'admin',
            });
        }
    }
    toResponse({ id, name, login }) {
        return { id, name, login };
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
exports.UserService = UserService;

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const create_user_dto_1 = require("./dtos/create-user.dto");
const create_user_service_1 = require("./services/create-user.service");
const get_user_by_email_service_1 = require("./services/get-user-by-email.service");
const update_user_dto_1 = require("./dtos/update-user.dto");
const get_all_users_service_1 = require("./services/get-all-users.service");
const update_user_by_email_service_1 = require("./services/update-user-by-email.service");
const get_user_dto_1 = require("./dtos/get-user.dto");
const get_user_by_id_service_1 = require("./services/get-user-by-id.service");
const delete_user_by_email_service_1 = require("./services/delete-user-by-email.service");
const unlock_level_service_1 = require("./services/unlock-level.service");
const login_dto_1 = require("./dtos/login.dto");
const validate_password_service_1 = require("./services/validate-password.service");
const unlock_level_dto_1 = require("./dtos/unlock-level.dto");
let UsersController = class UsersController {
    constructor(createUserService, getUserByEmailService, getAllUsersService, updateUserByEmailService, getUserByIdService, deleteUserByEmailService, unlockLevelService, validatePasswordService, getUserProfileService // Reutilización del servicio de búsqueda de usuario
    ) {
        this.createUserService = createUserService;
        this.getUserByEmailService = getUserByEmailService;
        this.getAllUsersService = getAllUsersService;
        this.updateUserByEmailService = updateUserByEmailService;
        this.getUserByIdService = getUserByIdService;
        this.deleteUserByEmailService = deleteUserByEmailService;
        this.unlockLevelService = unlockLevelService;
        this.validatePasswordService = validatePasswordService;
        this.getUserProfileService = getUserProfileService;
    }
    // Endpoint para crear un nuevo usuario
    create(createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.createUserService.create(createUserDto);
        });
    }
    // Endpoint para login de usuario (validación de credenciales)
    login(loginDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const isValidUser = yield this.validatePasswordService.validateUserPassword(loginDto.email, loginDto.password);
            return { success: isValidUser };
        });
    }
    // Endpoint para obtener todos los usuarios
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getAllUsersService.getAllUsers();
        });
    }
    // Endpoint para obtener un usuario por email
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('🛠️ Recibí email:', email);
            return this.getUserByEmailService.findByEmail(email);
        });
    }
    /**
    * Endpoint para verificar si un usuario existe por email.
    */
    checkUserExists(email) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('🛠️ Verificando existencia de usuario con email:', email);
            const user = yield this.getUserByEmailService.findByEmail(email);
            return { exists: !!user };
        });
    }
    // Endpoint para actualizar un usuario por email
    updateUserByEmail(email, updateUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.updateUserByEmailService.updateUserByEmail(email, updateUserDto);
        });
    }
    // Endpoint para eliminar un usuario por email
    deleteUserByEmail(params) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.deleteUserByEmailService.deleteUserByEmail(params.email);
            return { message: 'User deleted successfully' };
        });
    }
    // Endpoint para desbloquear un nivel para un usuario
    unlockLevel(email, body) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.unlockLevelService.unlockLevel(email, body.level);
            if (!user) {
                throw new common_1.NotFoundException(`Usuario con email ${email} no encontrado`);
            }
            return {
                message: `Nivel ${body.level} desbloqueado correctamente`,
                unlockedLevels: user.unlockedLevels
            };
        });
    }
    // Endpoint para obtener datos de perfil de un usuario (sin contraseña)
    getUserByEmailForProfile(email) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('📄 Recibí email para perfil:', email);
            return this.getUserProfileService.findByEmail(email);
        });
    }
    // Endpoint para obtener un usuario por ID
    getUserById(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getUserByIdService.findById(params.id);
        });
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "login", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)('by-email/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserByEmail", null);
__decorate([
    (0, common_1.Get)('exists/:email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "checkUserExists", null);
__decorate([
    (0, common_1.Put)('by-email/:email'),
    __param(0, (0, common_1.Param)('email')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUserByEmail", null);
__decorate([
    (0, common_1.Delete)(':email'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_user_dto_1.GetUserByEmailDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUserByEmail", null);
__decorate([
    (0, common_1.Post)(':email/unlock-level'),
    __param(0, (0, common_1.Param)('email')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, unlock_level_dto_1.UnlockLevelDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "unlockLevel", null);
__decorate([
    (0, common_1.Get)(':email'),
    __param(0, (0, common_1.Param)('email')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserByEmailForProfile", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_user_dto_1.GetUserByIdDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserById", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [create_user_service_1.CreateUserService,
        get_user_by_email_service_1.GetUserByEmailService,
        get_all_users_service_1.GetAllUsersService,
        update_user_by_email_service_1.UpdateUserByEmailService,
        get_user_by_id_service_1.GetUserByIdService,
        delete_user_by_email_service_1.DeleteUserByEmailService,
        unlock_level_service_1.UnlockLevelService,
        validate_password_service_1.ValidatePasswordService,
        get_user_by_email_service_1.GetUserByEmailService // Reutilización del servicio de búsqueda de usuario
    ])
], UsersController);

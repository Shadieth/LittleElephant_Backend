"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const users_controller_1 = require("./users.controller");
// Servicios (casos de uso)
const create_user_service_1 = require("./services/create-user.service");
const get_user_by_email_service_1 = require("./services/get-user-by-email.service");
const get_all_users_service_1 = require("./services/get-all-users.service");
const update_user_by_email_service_1 = require("./services/update-user-by-email.service");
const get_user_by_id_service_1 = require("./services/get-user-by-id.service");
const delete_user_by_email_service_1 = require("./services/delete-user-by-email.service");
const unlock_level_service_1 = require("./services/unlock-level.service");
const validate_password_service_1 = require("./services/validate-password.service");
const delete_ecosystem_service_1 = require("./services/delete-ecosystem.service");
const get_user_profile_service_1 = require("./services/get-user-profile.service");
// Repositorio y esquema
const users_repository_1 = require("./users.repository");
const create_user_schema_1 = require("./schemas/create-user.schema");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            // Registra el esquema de Mongoose para el modelo 'User'
            mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: create_user_schema_1.UserSchema }])
        ],
        controllers: [users_controller_1.UsersController], // Controlador del módulo de usuarios
        providers: [
            // Casos de uso (servicios) y repositorio
            create_user_service_1.CreateUserService,
            get_user_by_email_service_1.GetUserByEmailService,
            get_all_users_service_1.GetAllUsersService,
            get_user_by_id_service_1.GetUserByIdService,
            update_user_by_email_service_1.UpdateUserByEmailService,
            delete_ecosystem_service_1.DeleteEcosystemService,
            users_repository_1.UserRepository,
            delete_user_by_email_service_1.DeleteUserByEmailService,
            unlock_level_service_1.UnlockLevelService,
            validate_password_service_1.ValidatePasswordService,
            get_user_profile_service_1.GetUserProfileService
        ],
    })
], UsersModule);

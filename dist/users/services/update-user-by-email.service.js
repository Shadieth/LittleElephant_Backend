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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserByEmailService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_repository_1 = require("../users.repository");
let UpdateUserByEmailService = class UpdateUserByEmailService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    /**
     * Método para actualizar la información de un usuario identificado por su email.
     * @param email - Email del usuario a actualizar.
     * @param updateUserDto - Datos de actualización (nombre, contraseña nueva, etc.).
     * @returns El usuario actualizado o null si no se encuentra.
     */
    updateUserByEmail(email, updateUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            // Buscar el usuario existente
            const user = yield this.userRepository.findByEmail(email);
            if (!user) {
                throw new common_1.NotFoundException('Usuario no encontrado');
            }
            const updatedData = Object.assign({}, updateUserDto);
            // Si el usuario desea actualizar su contraseña
            if (updateUserDto.password) {
                if (!updateUserDto.currentPassword) {
                    throw new common_1.BadRequestException('Debe proporcionar la contraseña actual');
                }
                // Verificar que la contraseña actual sea correcta
                const isPasswordValid = yield bcrypt_1.default.compare(updateUserDto.currentPassword, user.password);
                if (!isPasswordValid) {
                    throw new common_1.BadRequestException('La contraseña actual es incorrecta');
                }
                // Cifrar la nueva contraseña antes de guardarla
                const salt = yield bcrypt_1.default.genSalt(10);
                updatedData.password = yield bcrypt_1.default.hash(updateUserDto.password, salt);
            }
            // Eliminar el campo currentPassword antes de guardar en la base de datos
            delete updatedData.currentPassword;
            // Actualizar el usuario en la base de datos
            return yield this.userRepository.updateUserByEmail(email, updatedData);
        });
    }
};
exports.UpdateUserByEmailService = UpdateUserByEmailService;
exports.UpdateUserByEmailService = UpdateUserByEmailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UserRepository])
], UpdateUserByEmailService);

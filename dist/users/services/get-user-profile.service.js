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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserProfileService = void 0;
const common_1 = require("@nestjs/common");
const users_repository_1 = require("../users.repository");
let GetUserProfileService = class GetUserProfileService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    /**
     * Método para obtener la información de un usuario por email,
     * excluyendo el campo de contraseña por motivos de seguridad.
     * @param email - Email del usuario.
     * @returns Un objeto parcial del usuario sin la contraseña, o null si no existe.
     */
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            // Utiliza el repositorio para buscar el usuario omitiendo el campo password
            return this.userRepository.findByEmailWithoutPassword(email);
        });
    }
};
exports.GetUserProfileService = GetUserProfileService;
exports.GetUserProfileService = GetUserProfileService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UserRepository])
], GetUserProfileService);

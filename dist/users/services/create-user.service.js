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
exports.CreateUserService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_repository_1 = require("../users.repository");
let CreateUserService = class CreateUserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    /**
     * Crea un nuevo usuario después de validar que no exista y cifrar su contraseña.
     * @param createUserDto Datos del nuevo usuario.
     * @returns Usuario creado.
     * @throws ConflictException si el usuario ya existe.
     * @throws BadRequestException si los datos están incompletos (como fallback defensivo).
     */
    create(createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            // Validación defensiva por si algo se escapa del DTO
            if (!createUserDto.email || !createUserDto.password) {
                throw new common_1.BadRequestException('Email y contraseña son obligatorios');
            }
            const user = yield this.userRepository.findByEmail(createUserDto.email);
            if (user) {
                throw new common_1.ConflictException('El correo electrónico ya está registrado');
            }
            const salt = yield bcrypt_1.default.genSalt(10);
            const hashedPassword = yield bcrypt_1.default.hash(createUserDto.password, salt);
            return yield this.userRepository.create(Object.assign(Object.assign({}, createUserDto), { password: hashedPassword }));
        });
    }
};
exports.CreateUserService = CreateUserService;
exports.CreateUserService = CreateUserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_repository_1.UserRepository])
], CreateUserService);

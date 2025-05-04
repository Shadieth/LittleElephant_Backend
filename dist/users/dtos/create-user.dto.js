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
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
var Gender;
(function (Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
    Gender["OTHER"] = "other";
})(Gender || (Gender = {}));
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El nombre es obligatorio' }),
    (0, class_validator_1.MinLength)(2, { message: 'El nombre debe tener al menos 2 caracteres' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'El apellido es obligatorio' }),
    (0, class_validator_1.MinLength)(2, { message: 'El apellido debe tener al menos 2 caracteres' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => new Date(value)),
    (0, class_validator_1.IsDate)({ message: 'La fecha de nacimiento no es válida' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'La fecha de nacimiento es obligatoria' }),
    __metadata("design:type", Date)
], CreateUserDto.prototype, "birthDate", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(Gender, { message: 'El género debe ser male, female u other' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "gender", void 0);
__decorate([
    (0, class_validator_1.IsEmail)({}, { message: 'Debe introducir un email válido' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'El correo electrónico es obligatorio' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
    (0, class_validator_1.MaxLength)(20, { message: 'La contraseña no debe superar los 20 caracteres' }),
    (0, class_validator_1.Matches)(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/, {
        message: 'La contraseña debe incluir al menos una mayúscula, una minúscula y un número'
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);

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
exports.CreateEcosystemDto = exports.QuestionDto = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
// DTO para representar una pregunta dentro de un ecosistema
class QuestionDto {
}
exports.QuestionDto = QuestionDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^https?:\/\/.+/i, {
        message: 'Debe ser una URL válida que comience con http o https',
    }),
    __metadata("design:type", String)
], QuestionDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(3, { message: 'Debe haber al menos 3 opciones' }),
    (0, class_validator_1.IsString)({ each: true }),
    __metadata("design:type", Array)
], QuestionDto.prototype, "options", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], QuestionDto.prototype, "correctAnswer", void 0);
// DTO principal para la creación de un ecosistema
class CreateEcosystemDto {
}
exports.CreateEcosystemDto = CreateEcosystemDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEcosystemDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUrl)({}, { message: 'Debe ser una URL válida de imagen' }),
    __metadata("design:type", String)
], CreateEcosystemDto.prototype, "image", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayMinSize)(1, { message: 'Debe haber al menos una pregunta' }),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => QuestionDto),
    __metadata("design:type", Array)
], CreateEcosystemDto.prototype, "questions", void 0);

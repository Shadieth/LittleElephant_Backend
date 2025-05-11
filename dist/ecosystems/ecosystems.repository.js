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
exports.EcosystemRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let EcosystemRepository = class EcosystemRepository {
    constructor(ecosystemModel) {
        this.ecosystemModel = ecosystemModel;
    }
    /**
     * Crea un nuevo ecosistema en la base de datos.
     * @param createEcosystemDto - Datos del ecosistema a crear.
     * @returns El ecosistema creado.
     */
    create(createEcosystemDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const newEcosystem = new this.ecosystemModel(createEcosystemDto);
            return yield newEcosystem.save();
        });
    }
    /**
     * Obtiene todos los ecosistemas almacenados.
     * @returns Un array de ecosistemas.
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ecosystemModel.find().exec();
        });
    }
    /**
     * Elimina un ecosistema por su ID.
     * @param ecosystemId - ID del ecosistema a eliminar.
     */
    deleteEcosystem(ecosystemId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.ecosystemModel.deleteOne({ _id: ecosystemId }).exec();
        });
    }
    /**
     * Busca un ecosistema por su nombre.
     * @param name - Nombre del ecosistema.
     * @returns El ecosistema encontrado o null.
     */
    findByName(name) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.ecosystemModel.findOne({ name }).exec();
        });
    }
    /**
     * Actualiza los datos de un ecosistema existente.
     * @param id - ID del ecosistema a actualizar.
     * @param updateEcosystemDto - Nuevos datos del ecosistema.
     * @returns El ecosistema actualizado.
     * @throws NotFoundException si no se encuentra el ecosistema.
     */
    update(id, updateEcosystemDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedEcosystem = yield this.ecosystemModel.findByIdAndUpdate(id, { $set: updateEcosystemDto }, { new: true }).exec();
            if (!updatedEcosystem) {
                throw new common_1.NotFoundException(`Ecosistema con ID ${id} no encontrado`);
            }
            return updatedEcosystem;
        });
    }
};
exports.EcosystemRepository = EcosystemRepository;
exports.EcosystemRepository = EcosystemRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Ecosystem')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EcosystemRepository);

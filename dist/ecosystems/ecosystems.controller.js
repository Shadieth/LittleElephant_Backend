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
exports.EcosystemsController = void 0;
const common_1 = require("@nestjs/common");
const create_ecosystem_dto_1 = require("./dtos/create-ecosystem.dto");
const update_ecosystem_dto_1 = require("./dtos/update-ecosystem.dto");
const create_ecosystem_service_1 = require("./services/create-ecosystem.service");
const get_all_ecosystem_service_1 = require("./services/get-all-ecosystem.service");
const delete_ecosystem_service_1 = require("./services/delete-ecosystem.service");
const update_ecosystem_service_1 = require("./services/update-ecosystem.service");
let EcosystemsController = class EcosystemsController {
    constructor(ecosystemService, getAllEcosystems, deleteEcosystemService, updateEcosystemService) {
        this.ecosystemService = ecosystemService;
        this.getAllEcosystems = getAllEcosystems;
        this.deleteEcosystemService = deleteEcosystemService;
        this.updateEcosystemService = updateEcosystemService;
    }
    /**
     * Endpoint para crear un nuevo ecosistema.
     * @param createEcosystemDto - Datos para crear el ecosistema.
     * @returns El ecosistema creado.
     */
    create(createEcosystemDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.ecosystemService.createEcosystem(createEcosystemDto);
        });
    }
    /**
     * Endpoint para obtener todos los ecosistemas existentes.
     * @returns Un array de ecosistemas.
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.getAllEcosystems.getAllEcosystems();
        });
    }
    /**
     * Endpoint para eliminar un ecosistema por su ID.
     * @param id - ID del ecosistema a eliminar.
     */
    deleteEcosystem(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.deleteEcosystemService.deleteEcosystem(id);
        });
    }
    /**
     * Endpoint para actualizar un ecosistema por su ID.
     * @param id - ID del ecosistema a actualizar.
     * @param updateEcosystemDto - Nuevos datos para actualizar el ecosistema.
     * @returns El ecosistema actualizado.
     */
    update(id, updateEcosystemDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.updateEcosystemService.update(id, updateEcosystemDto);
        });
    }
};
exports.EcosystemsController = EcosystemsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ecosystem_dto_1.CreateEcosystemDto]),
    __metadata("design:returntype", Promise)
], EcosystemsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EcosystemsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EcosystemsController.prototype, "deleteEcosystem", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ecosystem_dto_1.UpdateEcosystemDto]),
    __metadata("design:returntype", Promise)
], EcosystemsController.prototype, "update", null);
exports.EcosystemsController = EcosystemsController = __decorate([
    (0, common_1.Controller)('ecosystems'),
    __metadata("design:paramtypes", [create_ecosystem_service_1.CreateEcosystemService,
        get_all_ecosystem_service_1.GetAllEcosystemsService,
        delete_ecosystem_service_1.DeleteEcosystemService,
        update_ecosystem_service_1.UpdateEcosystemService])
], EcosystemsController);

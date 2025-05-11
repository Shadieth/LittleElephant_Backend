"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcosystemModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const ecosystems_controller_1 = require("./ecosystems.controller");
const create_ecosystem_service_1 = require("./services/create-ecosystem.service");
const get_all_ecosystem_service_1 = require("./services/get-all-ecosystem.service");
const delete_ecosystem_service_1 = require("./services/delete-ecosystem.service");
const update_ecosystem_service_1 = require("./services/update-ecosystem.service");
const ecosystems_repository_1 = require("./ecosystems.repository");
const ecosystem_schema_1 = require("./schemas/ecosystem.schema");
let EcosystemModule = class EcosystemModule {
};
exports.EcosystemModule = EcosystemModule;
exports.EcosystemModule = EcosystemModule = __decorate([
    (0, common_1.Module)({
        imports: [
            // Importa el modelo Ecosystem en el módulo de Mongoose
            mongoose_1.MongooseModule.forFeature([
                { name: 'Ecosystem', schema: ecosystem_schema_1.EcosystemModel.schema }
            ]),
        ],
        controllers: [ecosystems_controller_1.EcosystemsController],
        providers: [
            create_ecosystem_service_1.CreateEcosystemService,
            get_all_ecosystem_service_1.GetAllEcosystemsService,
            delete_ecosystem_service_1.DeleteEcosystemService,
            update_ecosystem_service_1.UpdateEcosystemService,
            ecosystems_repository_1.EcosystemRepository
        ],
    })
], EcosystemModule);

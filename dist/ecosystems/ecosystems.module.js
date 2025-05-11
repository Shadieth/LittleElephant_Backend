"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcosystemsModule = void 0;
const common_1 = require("@nestjs/common");
const create_ecosystem_service_1 = require("./create-ecosystem.service");
const get_all_ecosystems_service_1 = require("./get-all-ecosystems.service");
const delete_ecosystem_service_1 = require("./delete-ecosystem.service");
const update_ecosystem_service_1 = require("./update-ecosystem.service");
const ecosystem_repository_1 = require("./ecosystem.repository");
let EcosystemsModule = class EcosystemsModule {
};
exports.EcosystemsModule = EcosystemsModule;
exports.EcosystemsModule = EcosystemsModule = __decorate([
    (0, common_1.Module)({
        providers: [
            create_ecosystem_service_1.CreateEcosystemService,
            get_all_ecosystems_service_1.GetAllEcosystemsService,
            delete_ecosystem_service_1.DeleteEcosystemService,
            update_ecosystem_service_1.UpdateEcosystemService,
            ecosystem_repository_1.EcosystemRepository
        ],
    })
], EcosystemsModule);

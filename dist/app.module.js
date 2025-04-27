"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
// Importaciones principales de NestJS y módulos personalizados
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const database_module_1 = require("./config/database.module"); // Módulo de configuración de la base de datos
const users_module_1 = require("./users/users.module"); // Módulo de usuarios
const ecosystem_module_1 = require("./ecosystems/ecosystem.module"); // Módulo de ecosistemas
// Decorador @Module define la configuración del módulo principal
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            // Importa configuración personalizada de base de datos
            database_module_1.DatabaseModule,
            // Configura la conexión a MongoDB utilizando la URI de entorno
            mongoose_1.MongooseModule.forRoot((_a = process.env.MONGO_URI) !== null && _a !== void 0 ? _a : 'mongodb://localhost:27017/littleelephant_db'),
            // Importa módulos funcionales de la aplicación
            users_module_1.UsersModule,
            ecosystem_module_1.EcosystemModule,
        ],
    })
], AppModule);

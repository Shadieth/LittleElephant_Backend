"use strict";
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
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const database_module_1 = require("./config/database.module");
const common_1 = require("@nestjs/common");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000;
        // Conectar a la base de datos
        yield database_module_1.DatabaseModule.connect();
        // Habilitar CORS
        app.enableCors({
            origin: '*', // Permite cualquier origen (lo ideal sería especificar solo los orígenes necesarios)
            methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
            allowedHeaders: 'Content-Type, Accept', // Cabeceras permitidas
        });
        // Habilitar las validaciones globalmente
        app.useGlobalPipes(new common_1.ValidationPipe({
            whitelist: true, // Elimina propiedades no definidas en el DTO
            forbidNonWhitelisted: true, // Lanza error si se encuentran propiedades no válidas
            transform: true, // Transforma los datos entrantes en el tipo correcto
        }));
        yield app.listen(port, '0.0.0.0');
        console.log(`Servidor corriendo en http://localhost:${port}`);
    });
}
bootstrap();

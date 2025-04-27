// Importaciones principales de NestJS y módulos personalizados
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './config/database.module'; // Módulo de configuración de la base de datos
import { UsersModule } from './users/users.module';        // Módulo de usuarios
import { EcosystemModule } from './ecosystems/ecosystem.module'; // Módulo de ecosistemas

// Decorador @Module define la configuración del módulo principal
@Module({
  imports: [
    // Importa configuración personalizada de base de datos
    DatabaseModule,
    
    // Configura la conexión a MongoDB utilizando la URI de entorno
    MongooseModule.forRoot(
      process.env.MONGO_URI ?? 'mongodb://localhost:27017/littleelephant_db'
    ),
    
    // Importa módulos funcionales de la aplicación
    UsersModule,
    EcosystemModule,
  ],
})
export class AppModule {}

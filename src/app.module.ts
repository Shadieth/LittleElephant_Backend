import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './config/database.module'; // Importa el módulo de la base de datos
import { UsersModule } from './users/users.module';
import { EcosystemModule } from './ecosystems/ecosystem.module';

@Module({
  imports: [
    DatabaseModule,
    MongooseModule.forRoot(process.env.MONGO_URI ?? 'mongodb://localhost:27017/littleelephant_db'),
    UsersModule,
    EcosystemModule,
  ],
})
export class AppModule {}

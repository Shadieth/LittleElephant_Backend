import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UsersController } from './users.controller';

// Servicios (casos de uso)
import { CreateUserService } from './services/create-user.service';
import { GetUserByEmailService } from './services/get-user-by-email.service';
import { GetAllUsersService } from './services/get-all-users.service';
import { UpdateUserByEmailService } from './services/update-user-by-email.service';
import { GetUserByIdService } from './services/get-user-by-id.service';
import { DeleteUserByEmailService } from './services/delete-user-by-email.service';
import { UnlockLevelService } from './services/unlock-level.service';
import { ValidatePasswordService } from './services/validate-password.service';
import { DeleteEcosystemService } from './services/delete-ecosystem.service';
import { GetUserProfileService } from './services/get-user-profile.service';

// Repositorio y esquema
import { UserRepository } from './users.repository';
import { UserSchema } from './schemas/create-user.schema';

@Module({
  imports: [
    // Registra el esquema de Mongoose para el modelo 'User'
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
  ],
  controllers: [UsersController], // Controlador del módulo de usuarios
  providers: [
    // Casos de uso (servicios) y repositorio
    CreateUserService,
    GetUserByEmailService,
    GetAllUsersService,
    GetUserByIdService,
    UpdateUserByEmailService,
    DeleteEcosystemService,
    UserRepository,
    DeleteUserByEmailService,
    UnlockLevelService,
    ValidatePasswordService,
    GetUserProfileService
  ],
})
export class UsersModule {}


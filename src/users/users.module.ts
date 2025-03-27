import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { CreateUserService } from './services/create-user.service';
import { UserRepository } from './users.repository';
import { UserSchema } from './schemas/create-user.schema';
import { GetUserByEmailService } from './services/get-user-by-email.service';
import { GetAllUsersService } from './services/get-all-users.service';
import { UpdateUserByEmailService } from './services/update-user-by-email.service';
import { GetUserByIdService } from './services/get-user-by-id.service';
import { DeleteUserByEmailService } from './services/delete-user-by-email.service';
import { UnlockLevelService } from './services/unlock-level.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])
  ],
  controllers: [UsersController],
  providers: [
    CreateUserService,
    GetUserByEmailService,
    GetAllUsersService,
    GetUserByIdService,
    UpdateUserByEmailService,
    UserRepository,
    DeleteUserByEmailService,
    UnlockLevelService,
  ],
})
export class UsersModule {}

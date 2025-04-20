import { Controller, Post, Body, Get, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './interfaces/user.interface';
import { CreateUserService } from './services/create-user.service';
import { GetUserByEmailService } from './services/get-user-by-email.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { GetAllUsersService } from './services/get-all-users.service';
import { UpdateUserByEmailService } from './services/update-user-by-email.service';
import { GetUserByIdDto, GetUserByEmailDto } from './dtos/get-user.dto';
import { GetUserByIdService } from './services/get-user-by-id.service';
import { DeleteUserByEmailService } from './services/delete-user-by-email.service';
import { UnlockLevelService } from './services/unlock-level.service';
import { LoginDto } from './dtos/login.dto';
import { ValidatePasswordService } from './services/validate-password.service';
import { DeleteEcosystemService } from './services/delete-ecosystem.service';
import { UnlockLevelDto } from './dtos/unlock-level.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserService: CreateUserService,
    private readonly getUserByEmailService: GetUserByEmailService,
    private readonly getAllUsersService: GetAllUsersService,
    private readonly updateUserByEmailService: UpdateUserByEmailService,
    private readonly getUserByIdService: GetUserByIdService,
    private readonly deleteUserByEmailService: DeleteUserByEmailService,
    private readonly unlockLevelService: UnlockLevelService,
    private readonly validatePasswordService: ValidatePasswordService,
    private readonly deleteEcosystemService: DeleteEcosystemService,
    private readonly getUserProfileService: GetUserByEmailService // Usamos el mismo servicio para obtener el perfil
  ) {}

  //Endpoint to create a new user
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.create(createUserDto);
  }

  // En el controlador del login
  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<{ success: boolean }> {
    const isValidUser = await this.validatePasswordService.validateUserPassword(
      loginDto.email,
      loginDto.password
    );
    
    return { success: isValidUser }; // En lugar de devolver solo el booleano, devolvemos un objeto con la propiedad 'success'
  }

  //Endpoint to get all users
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.getAllUsersService.getAllUsers();
  }

  //Endpoint to get a user by email
  @Get('by-email/:email')
  async getUserByEmail(@Param('email') email: string): Promise<User | null> {
    console.log('🛠️ Recibí email:', email);
    return this.getUserByEmailService.findByEmail(email);
  }

  //Endpoint to update a user by email
  @Put('by-email/:email')
  async updateUserByEmail(
    @Param('email') email: string,
     @Body() updateUserDto: UpdateUserDto
  ): Promise<User | null> {
    return this.updateUserByEmailService.updateUserByEmail(email, updateUserDto);
  }

   // Endpoint to delete a user by email
   @Delete(':email')
   async deleteUserByEmail(@Param() params: GetUserByEmailDto): Promise<{ message: string }> {
     await this.deleteUserByEmailService.deleteUserByEmail(params.email);
     return { message: 'User deleted successfully' };
   }

   //Endpoint to unlock a level for a user
   @Post(':email/unlock-level')
  async unlockLevel(
    @Param('email') email: string,
    @Body() body: UnlockLevelDto
  ): Promise<{ message: string; unlockedLevels: number[] }> {
    const user = await this.unlockLevelService.unlockLevel(email, body.level);
    if (!user) {
      throw new NotFoundException(`Usuario con email ${email} no encontrado`);
    }

    return {
      message: `Nivel ${body.level} desbloqueado correctamente`,
      unlockedLevels: user.unlockedLevels
    };
  }

  @Delete(':email/ecosystems/:ecosystemId')
  async deleteEcosystem(
    @Param('email') email: string,
    @Param('ecosystemId') ecosystemId: string
  ): Promise<{ message: string }> {
    await this.deleteEcosystemService.deleteEcosystem(email, ecosystemId);
    return { message: 'Ecosistema eliminado exitosamente' };
  }

  // Endpoint para obtener solo lo necesario para la pantalla de perfil (sin contraseña)
// Endpoint para obtener perfil sin contraseña
@Get(':email')
async getUserByEmailForProfile(@Param('email') email: string): Promise<Partial<User> | null> {
  console.log('📄 Recibí email para perfil:', email);
  return this.getUserProfileService.findByEmail(email);
}



  //Endpoint to get a user by id
  @Get(':id')
  async getUserById(@Param() params: GetUserByIdDto): Promise<User | null> {
    return this.getUserByIdService.findById(params.id);
  }
}
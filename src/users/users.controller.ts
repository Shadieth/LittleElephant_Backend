import { 
  Controller, Post, Body, Get, Param, Put, Delete, NotFoundException 
} from '@nestjs/common';
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
    private readonly getUserProfileService: GetUserByEmailService // Reutilización del servicio de búsqueda de usuario
  ) {}

  // Endpoint para crear un nuevo usuario
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.createUserService.create(createUserDto);
  }

  // Endpoint para login de usuario (validación de credenciales)
  @Post('login')
  async login(@Body() loginDto: LoginDto): Promise<{ success: boolean }> {
    const isValidUser = await this.validatePasswordService.validateUserPassword(
      loginDto.email,
      loginDto.password
    );
    return { success: isValidUser };
  }

  // Endpoint para obtener todos los usuarios
  @Get()
  async getAllUsers(): Promise<User[]> {
    return this.getAllUsersService.getAllUsers();
  }

  // Endpoint para obtener un usuario por email
  @Get('by-email/:email')
  async getUserByEmail(@Param('email') email: string): Promise<User | null> {
    return this.getUserByEmailService.findByEmail(email);
  }

  /**
  * Endpoint para verificar si un usuario existe por email.
  */
  @Get('exists/:email')
  async checkUserExists(@Param('email') email: string): Promise<{ exists: boolean }> {
    const user = await this.getUserByEmailService.findByEmail(email);
    return { exists: !!user };
  }

  // Endpoint para actualizar un usuario por email
  @Put('by-email/:email')
  async updateUserByEmail(
    @Param('email') email: string,
    @Body() updateUserDto: UpdateUserDto
  ): Promise<User | null> {
    return this.updateUserByEmailService.updateUserByEmail(email, updateUserDto);
  }

  // Endpoint para eliminar un usuario por email
  @Delete(':email')
  async deleteUserByEmail(@Param() params: GetUserByEmailDto): Promise<{ message: string }> {
    await this.deleteUserByEmailService.deleteUserByEmail(params.email);
    return { message: 'User deleted successfully' };
  }

  // Endpoint para desbloquear un nivel para un usuario
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

  // Endpoint para obtener datos de perfil de un usuario (sin contraseña)
  @Get(':email')
  async getUserByEmailForProfile(@Param('email') email: string): Promise<Partial<User> | null> {
    return this.getUserProfileService.findByEmail(email);
  }

  // Endpoint para obtener un usuario por ID
  @Get(':id')
  async getUserById(@Param() params: GetUserByIdDto): Promise<User | null> {
    return this.getUserByIdService.findById(params.id);
  }
}

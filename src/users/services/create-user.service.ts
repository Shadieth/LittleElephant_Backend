import { ConflictException, Injectable, BadRequestException } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { User } from '../interfaces/user.interface';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserRepository } from '../users.repository';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * Crea un nuevo usuario después de validar que no exista y cifrar su contraseña.
   * @param createUserDto Datos del nuevo usuario.
   * @returns Usuario creado.
   * @throws ConflictException si el usuario ya existe.
   * @throws BadRequestException si los datos están incompletos (como fallback defensivo).
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    // Validación defensiva por si algo se escapa del DTO
    if (!createUserDto.email || !createUserDto.password) {
      throw new BadRequestException('Email y contraseña son obligatorios');
    }

    const user = await this.userRepository.findByEmail(createUserDto.email);
    if (user) {
      throw new ConflictException('El correo electrónico ya está registrado');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    return await this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
  }
}



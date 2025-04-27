import { ConflictException, Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { User } from '../interfaces/user.interface';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserRepository } from '../users.repository';

@Injectable()
export class CreateUserService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  /**
   * Método para crear un nuevo usuario en la base de datos.
   * @param createUserDto - Datos necesarios para crear el usuario.
   * @returns El usuario creado.
   * @throws ConflictException si el usuario ya existe.
   */
  async create(createUserDto: CreateUserDto): Promise<User> {
    // Verificar si ya existe un usuario con el mismo email
    const user = await this.userRepository.findByEmail(createUserDto.email);
    if (user) {
      throw new ConflictException('User already exists');
    }

    // Cifrar la contraseña antes de crear el usuario
    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt);

    // Crear y guardar el nuevo usuario
    return await this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
  }
}


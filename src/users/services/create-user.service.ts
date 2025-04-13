import { ConflictException, Injectable } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { User } from '../interfaces/user.interface';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserRepository } from '../users.repository';

@Injectable()
export class CreateUserService {
  constructor(private readonly userRepository: UserRepository)  {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.findByEmail(createUserDto.email);
    if (user) {
      throw new ConflictException('User already exists');
    }
    // Cifrar la contraseña antes de crear el usuario
    const salt = await bcrypt.genSalt(10); // Generar un "sal" para el cifrado
    const hashedPassword = await bcrypt.hash(createUserDto.password, salt); // Cifrar la contraseña

    return await this.userRepository.create({
      ...createUserDto,
      password: hashedPassword,
    });
  }
}

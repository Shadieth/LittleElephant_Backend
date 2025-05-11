import { Injectable } from '@nestjs/common';
import { UserRepository } from '../users.repository';
import { User } from '../interfaces/user.interface';

@Injectable()
export class GetUserByEmailService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  /**
   * Método para buscar un usuario por su dirección de correo electrónico.
   * @param email - Email del usuario.
   * @returns El usuario encontrado o null si no existe.
   */
  async findByEmail(email: string): Promise<User | null> {
    // Utiliza el repositorio para buscar el usuario por email
    return await this.userRepository.findByEmail(email);
  }
}


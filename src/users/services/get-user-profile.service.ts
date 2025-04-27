import { Injectable } from '@nestjs/common';
import { UserRepository } from '../users.repository';
import { User } from '../interfaces/user.interface';

@Injectable()
export class GetUserProfileService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  /**
   * Método para obtener la información de un usuario por email,
   * excluyendo el campo de contraseña por motivos de seguridad.
   * @param email - Email del usuario.
   * @returns Un objeto parcial del usuario sin la contraseña, o null si no existe.
   */
  async findByEmail(email: string): Promise<Partial<User> | null> {
    // Utiliza el repositorio para buscar el usuario omitiendo el campo password
    return this.userRepository.findByEmailWithoutPassword(email);
  }
}


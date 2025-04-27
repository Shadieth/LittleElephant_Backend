import { Injectable } from '@nestjs/common';
import { UserRepository } from '../users.repository';
import { User } from '../interfaces/user.interface';

@Injectable()
export class GetUserByIdService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  /**
   * Método para buscar un usuario a partir de su ID.
   * @param id - ID único del usuario.
   * @returns El usuario correspondiente si existe, o null si no se encuentra.
   */
  async findById(id: string): Promise<User | null> {
    // Utiliza el repositorio para buscar el usuario por ID
    return await this.userRepository.findById(id);
  }
}


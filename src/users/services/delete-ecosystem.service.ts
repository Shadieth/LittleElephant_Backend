import { Injectable } from '@nestjs/common';
import { UserRepository } from '../users.repository';

@Injectable()
export class DeleteEcosystemService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  /**
   * Método para eliminar un ecosistema específico de un usuario.
   * @param email - Email del usuario.
   * @param ecosystemId - Identificador único del ecosistema a eliminar.
   */
  async deleteEcosystem(email: string, ecosystemId: string): Promise<void> {
    // Utiliza el repositorio para eliminar el ecosistema del usuario
    await this.userRepository.deleteEcosystem(email, ecosystemId);
  }
}

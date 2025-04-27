import { Injectable } from '@nestjs/common';
import { UserRepository } from '../users.repository';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UnlockLevelService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  /**
   * Método para desbloquear un nuevo nivel para un usuario.
   * @param email - Email del usuario.
   * @param level - Número del nivel a desbloquear.
   * @returns El usuario actualizado con el nuevo nivel desbloqueado, o null si no se encuentra.
   */
  async unlockLevel(email: string, level: number): Promise<User | null> {
    // Llama al repositorio para añadir el nivel al array de niveles desbloqueados
    return await this.userRepository.unlockLevel(email, level);
  }
}


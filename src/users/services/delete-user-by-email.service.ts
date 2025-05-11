import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../users.repository';

@Injectable()
export class DeleteUserByEmailService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  /**
   * Método para eliminar un usuario basado en su email.
   * @param email - Email del usuario a eliminar.
   * @throws NotFoundException si el usuario no se encuentra.
   */
  async deleteUserByEmail(email: string): Promise<void> {
    const deleted = await this.userRepository.deleteUserByEmail(email);
    if (!deleted) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
  }
}


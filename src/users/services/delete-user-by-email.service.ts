import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../users.repository';

@Injectable()
export class DeleteUserByEmailService {
  constructor(private readonly userRepository: UserRepository) {}

  async deleteUserByEmail(email: string): Promise<void> {
    const deleted = await this.userRepository.deleteUserByEmail(email);
    if (!deleted) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
  }
}

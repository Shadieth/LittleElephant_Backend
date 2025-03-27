import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../users.repository';

@Injectable()
export class UnlockLevelService {
  constructor(private readonly userRepository: UserRepository) {}

  async unlockLevel(email: string, level: number): Promise<{ message: string }> {
    const user = await this.userRepository.unlockLevel(email, level);
    if (!user) {
      throw new NotFoundException(`User with email ${email} not found`);
    }
    return { message: `Level ${level} unlocked successfully` };
  }
}

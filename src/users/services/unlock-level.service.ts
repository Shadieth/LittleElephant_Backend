import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../users.repository';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UnlockLevelService {
  constructor(private readonly userRepository: UserRepository) {}

  async unlockLevel(email: string, level: number): Promise<User | null> {
    return await this.userRepository.unlockLevel(email, level);
  }
}

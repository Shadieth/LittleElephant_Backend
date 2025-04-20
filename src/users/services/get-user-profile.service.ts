import { Injectable } from '@nestjs/common';
import { UserRepository } from '../users.repository';
import { User } from '../interfaces/user.interface';

@Injectable()
export class GetUserProfileService {
  constructor(private readonly userRepository: UserRepository) {}

  async findByEmail(email: string): Promise<Partial<User> | null> {
    return this.userRepository.findByEmailWithoutPassword(email);
  }
}

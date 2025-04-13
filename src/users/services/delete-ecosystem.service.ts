import { Injectable } from '@nestjs/common';
import { UserRepository } from '../users.repository';

@Injectable()
export class DeleteEcosystemService {
  constructor(private readonly userRepository: UserRepository) {}

  async deleteEcosystem(email: string, ecosystemId: string): Promise<void> {
    await this.userRepository.deleteEcosystem(email, ecosystemId);
  }
} 
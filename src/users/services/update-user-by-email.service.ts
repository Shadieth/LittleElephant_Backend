import { Injectable } from '@nestjs/common';
import { UserRepository } from '../users.repository';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UpdateUserByEmailService {
  constructor(private readonly userRepository: UserRepository) {}

  async updateUserByEmail(email: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    return await this.userRepository.updateUserByEmail(email, updateUserDto);
  }
}

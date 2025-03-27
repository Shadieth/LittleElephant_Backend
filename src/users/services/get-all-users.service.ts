import { Injectable } from "@nestjs/common";
import { User } from "../interfaces/user.interface";
import { UserRepository } from "../users.repository";

@Injectable()
export class GetAllUsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userRepository.findAll();
  }
}

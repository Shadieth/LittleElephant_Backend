import { Injectable } from "@nestjs/common";
import { User } from "../interfaces/user.interface";
import { UserRepository } from "../users.repository";

@Injectable()
export class GetAllUsersService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  /**
   * Método para obtener todos los usuarios registrados en la base de datos.
   * @returns Un array de usuarios.
   */
  async getAllUsers(): Promise<User[]> {
    // Llama al repositorio para obtener la lista completa de usuarios
    return await this.userRepository.findAll();
  }
}


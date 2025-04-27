import { Injectable } from "@nestjs/common";
import { UserRepository } from "../users.repository";
import bcrypt from 'bcrypt';

@Injectable()
export class ValidatePasswordService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  /**
   * Método para validar la contraseña de un usuario.
   * @param email - Email del usuario.
   * @param password - Contraseña proporcionada por el usuario.
   * @returns boolean indicando si la contraseña es correcta o no.
   */
  async validateUserPassword(email: string, password: string): Promise<boolean> {
    // Buscar el usuario por email
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      return false;
    }

    // Comparar la contraseña introducida con la almacenada (cifrada) en la base de datos
    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch;
  }
}

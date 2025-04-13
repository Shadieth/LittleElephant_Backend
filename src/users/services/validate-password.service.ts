import { Injectable } from "@nestjs/common";
import { UserRepository } from "../users.repository";
import bcrypt from 'bcrypt';

@Injectable()
export class ValidatePasswordService {
  constructor(private readonly userRepository: UserRepository)  {}
  
  // Método para comparar la contraseña
  async validateUserPassword(email: string, password: string): Promise<boolean> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      return false;
    }
    // Comparar la contraseña introducida con la cifrada en la base de datos
    const isMatch = await bcrypt.compare(password, user.password);
    return isMatch;
  }
}
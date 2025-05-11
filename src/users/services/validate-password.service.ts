import { Injectable, BadRequestException, UnauthorizedException, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../users.repository';
import bcrypt from 'bcrypt';

@Injectable()
export class ValidatePasswordService {
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * Valida la contraseña de un usuario.
   * @param email Email del usuario.
   * @param password Contraseña introducida.
   * @returns boolean si es válida, o lanza excepción si no.
   */
  async validateUserPassword(email: string, password: string): Promise<boolean> {
    // Validación defensiva de campos vacíos (por seguridad y UX)
    if (!email || !password) {
      throw new BadRequestException('Email y contraseña son obligatorios');
    }

    // Buscar el usuario por email
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    // Validar contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    return true;
  }
}


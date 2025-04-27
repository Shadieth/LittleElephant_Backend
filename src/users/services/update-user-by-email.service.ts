import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { UserRepository } from '../users.repository';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UpdateUserByEmailService {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  /**
   * Método para actualizar la información de un usuario identificado por su email.
   * @param email - Email del usuario a actualizar.
   * @param updateUserDto - Datos de actualización (nombre, contraseña nueva, etc.).
   * @returns El usuario actualizado o null si no se encuentra.
   */
  async updateUserByEmail(email: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    // Buscar el usuario existente
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const updatedData = { ...updateUserDto };

    // Si el usuario desea actualizar su contraseña
    if (updateUserDto.password) {
      if (!updateUserDto.currentPassword) {
        throw new BadRequestException('Debe proporcionar la contraseña actual');
      }

      // Verificar que la contraseña actual sea correcta
      const isPasswordValid = await bcrypt.compare(updateUserDto.currentPassword, user.password);
      if (!isPasswordValid) {
        throw new BadRequestException('La contraseña actual es incorrecta');
      }

      // Cifrar la nueva contraseña antes de guardarla
      const salt = await bcrypt.genSalt(10);
      updatedData.password = await bcrypt.hash(updateUserDto.password, salt);
    }

    // Eliminar el campo currentPassword antes de guardar en la base de datos
    delete updatedData.currentPassword;

    // Actualizar el usuario en la base de datos
    return await this.userRepository.updateUserByEmail(email, updatedData);
  }
}


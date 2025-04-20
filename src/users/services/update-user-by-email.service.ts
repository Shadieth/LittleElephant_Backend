import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import bcrypt from 'bcrypt';
import { UserRepository } from '../users.repository';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { User } from '../interfaces/user.interface';

@Injectable()
export class UpdateUserByEmailService {
  constructor(private readonly userRepository: UserRepository) {}

  async updateUserByEmail(email: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const updatedData = { ...updateUserDto };

    // ✅ Validar la contraseña actual antes de permitir el cambio
    if (updateUserDto.password) {
      if (!updateUserDto.currentPassword) {
        throw new BadRequestException('Debe proporcionar la contraseña actual');
      }

      const isPasswordValid = await bcrypt.compare(updateUserDto.currentPassword, user.password);
      if (!isPasswordValid) {
        throw new BadRequestException('La contraseña actual es incorrecta');
      }

      // Hasheamos la nueva contraseña
      const salt = await bcrypt.genSalt(10);
      updatedData.password = await bcrypt.hash(updateUserDto.password, salt);
    }

    delete updatedData.currentPassword; // No queremos guardar este campo

    return await this.userRepository.updateUserByEmail(email, updatedData);
  }

}

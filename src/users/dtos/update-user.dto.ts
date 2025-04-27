import { IsOptional, IsString, IsDateString, IsIn } from 'class-validator';

// DTO (Data Transfer Object) para actualizar los datos de un usuario
export class UpdateUserDto {
  @IsOptional()
  @IsString()
  firstName?: string; // Nombre del usuario (opcional)

  @IsOptional()
  @IsString()
  lastName?: string; // Apellido del usuario (opcional)

  @IsOptional()
  @IsDateString()
  birthDate?: Date; // Fecha de nacimiento del usuario (opcional)

  @IsOptional()
  @IsIn(['male', 'female', 'other'])
  gender?: string; // Género del usuario (opcional, valores permitidos)

  @IsOptional()
  @IsString()
  password?: string; // Nueva contraseña (opcional)

  @IsOptional()
  @IsString()
  currentPassword?: string; // Contraseña actual para validación antes del cambio (opcional)
}



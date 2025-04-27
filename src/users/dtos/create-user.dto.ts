import { IsString, IsNotEmpty, MinLength, MaxLength, IsDate, IsEmail, IsEnum } from 'class-validator';
import { Transform } from 'class-transformer';

// Definición de los valores permitidos para el campo género
enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

// DTO (Data Transfer Object) para la creación de un nuevo usuario
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  firstName!: string; // Nombre del usuario (mínimo 1 carácter)

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  lastName!: string; // Apellido del usuario (mínimo 1 carácter)

  @Transform(({ value }) => new Date(value))
  @IsDate()
  @IsNotEmpty()
  birthDate!: Date; // Fecha de nacimiento (transformada a objeto Date)

  @IsEnum(Gender)
  @IsNotEmpty()
  gender!: Gender; // Género del usuario (solo valores permitidos)

  @IsEmail()
  @IsNotEmpty()
  email!: string; // Email del usuario (formato de email válido)

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @IsNotEmpty()
  password!: string; // Contraseña (entre 6 y 20 caracteres)
}


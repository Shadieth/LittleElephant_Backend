import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

// DTO (Data Transfer Object) para validar los datos de inicio de sesión (login)
export class LoginDto {
  @IsEmail()
  @IsNotEmpty()
  email!: string; // Email del usuario (debe ser un formato de email válido y no vacío)

  @IsString()
  @IsNotEmpty()
  password!: string; // Contraseña del usuario (debe ser una cadena de texto no vacía)
}

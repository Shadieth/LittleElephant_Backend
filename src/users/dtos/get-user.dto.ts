import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

// DTO (Data Transfer Object) para obtener un usuario mediante su email
export class GetUserByEmailDto {
  @IsEmail()
  @IsNotEmpty()
  email!: string; // Email del usuario (debe ser un formato válido y no puede estar vacío)
}

// DTO (Data Transfer Object) para obtener un usuario mediante su ID
export class GetUserByIdDto {
  @IsString()
  @IsNotEmpty()
  id!: string; // Identificador único del usuario (debe ser una cadena no vacía)
}


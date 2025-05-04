import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

// DTO para validar los datos de inicio de sesión
export class LoginDto {
  @IsEmail({}, { message: 'Debe introducir un email válido' })
  @IsNotEmpty({ message: 'El campo email no puede estar vacío' })
  email!: string;

  @IsString({ message: 'La contraseña debe ser una cadena de texto' })
  @IsNotEmpty({ message: 'Debe introducir una contraseña' })
  password!: string;
}


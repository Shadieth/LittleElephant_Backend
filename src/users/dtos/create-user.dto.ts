import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  IsDate,
  IsEmail,
  IsEnum,
  Matches
} from 'class-validator';
import { Transform } from 'class-transformer';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @MinLength(2, { message: 'El nombre debe tener al menos 2 caracteres' })
  firstName!: string;

  @IsString()
  @IsNotEmpty({ message: 'El apellido es obligatorio' })
  @MinLength(2, { message: 'El apellido debe tener al menos 2 caracteres' })
  lastName!: string;

  @Transform(({ value }) => new Date(value))
  @IsDate({ message: 'La fecha de nacimiento no es válida' })
  @IsNotEmpty({ message: 'La fecha de nacimiento es obligatoria' })
  birthDate!: Date;

  @IsEnum(Gender, { message: 'El género debe ser male, female u other' })
  gender!: Gender;

  @IsEmail({}, { message: 'Debe introducir un email válido' })
  @IsNotEmpty({ message: 'El correo electrónico es obligatorio' })
  email!: string;

  @IsString()
  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  @MaxLength(20, { message: 'La contraseña no debe superar los 20 caracteres' })
  @Matches(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/, {
    message: 'La contraseña debe incluir al menos una mayúscula, una minúscula y un número'
  })
  password!: string;
}



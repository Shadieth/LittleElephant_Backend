import { IsEmail, IsString, MinLength, MaxLength, IsNotEmpty, IsEnum, IsDate } from 'class-validator';
import { Transform } from 'class-transformer';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  firstName!: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(1)
  lastName!: string;

  @Transform(({ value }) => new Date(value))
  @IsDate()
  @IsNotEmpty()
  birthDate!: Date;

  @IsEnum(Gender)
  @IsNotEmpty()
  gender!: Gender;

  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @MinLength(6)
  @MaxLength(20)
  @IsNotEmpty()
  password!: string;
}

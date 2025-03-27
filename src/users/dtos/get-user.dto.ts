import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class GetUserByEmailDto {
  @IsEmail()
  @IsNotEmpty() 
  email!: string;
}

export class GetUserByIdDto {
  @IsString()
  @IsNotEmpty()
  id!: string;
}

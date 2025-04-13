import {
  IsArray,
  IsNotEmpty,
  IsString,
  ArrayMinSize,
  ValidateNested,
  IsUrl,
  Matches
} from 'class-validator';
import { Type } from 'class-transformer';

export class QuestionDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^https?:\/\/.+/i, {
    message: 'Debe ser una URL válida que comience con http o https',
  })
  image!: string;
  

  @IsArray()
  @ArrayMinSize(3, { message: 'Debe haber al menos 3 opciones' })
  @IsString({ each: true })
  options!: string[];

  @IsString()
  @IsNotEmpty()
  correctAnswer!: string;
}

export class CreateEcosystemDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsString()
  @IsNotEmpty()
  @IsUrl({}, { message: 'Debe ser una URL válida de imagen' })
  image!: string;

  @IsArray()
  @ArrayMinSize(1, { message: 'Debe haber al menos una pregunta' })
  @ValidateNested({ each: true })
  @Type(() => QuestionDto)
  questions!: QuestionDto[];
}
  
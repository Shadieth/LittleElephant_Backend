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

// DTO para representar una pregunta dentro de un ecosistema
export class QuestionDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^https?:\/\/.+/i, {
    message: 'Debe ser una URL válida que comience con http o https',
  })
  image!: string; // URL de la imagen de la pregunta

  @IsArray()
  @ArrayMinSize(3, { message: 'Debe haber al menos 3 opciones' })
  @IsString({ each: true })
  options!: string[]; // Opciones disponibles (mínimo 3)

  @IsString()
  @IsNotEmpty()
  correctAnswer!: string; // Respuesta correcta
}

// DTO principal para la creación de un ecosistema
export class CreateEcosystemDto {
  @IsString()
  @IsNotEmpty()
  name!: string; // Nombre del ecosistema

  @IsString()
  @IsNotEmpty()
  @IsUrl({}, { message: 'Debe ser una URL válida de imagen' })
  image!: string; // URL de la imagen representativa del ecosistema

  @IsArray()
  @ArrayMinSize(1, { message: 'Debe haber al menos una pregunta' })
  @ValidateNested({ each: true })
  @Type(() => QuestionDto)
  questions!: QuestionDto[]; // Array de preguntas (mínimo una)
}

  
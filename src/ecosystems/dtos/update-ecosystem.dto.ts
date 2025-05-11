import { IsOptional, IsString, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { QuestionDto } from './create-ecosystem.dto';

// DTO para actualizar un ecosistema existente
export class UpdateEcosystemDto {
  @IsOptional()
  @IsString()
  name?: string; // Nuevo nombre del ecosistema (opcional)

  @IsOptional()
  @IsString()
  image?: string; // Nueva URL de imagen del ecosistema (opcional)

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => QuestionDto)
  questions?: QuestionDto[]; // Nuevas preguntas para el ecosistema (opcional)
}

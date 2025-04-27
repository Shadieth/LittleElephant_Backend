import { IsNumber } from 'class-validator';

// DTO (Data Transfer Object) para desbloquear un nivel para un usuario
export class UnlockLevelDto {
  @IsNumber()
  level!: number; // Número de nivel que se desea desbloquear
}


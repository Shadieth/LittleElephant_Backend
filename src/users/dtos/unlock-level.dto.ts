import { IsNumber } from 'class-validator';

export class UnlockLevelDto {
  @IsNumber()
  level!: number;
}

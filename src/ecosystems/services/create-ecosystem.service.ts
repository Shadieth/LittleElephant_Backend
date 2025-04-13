import { Injectable, ConflictException } from '@nestjs/common';
import { CreateEcosystemDto } from '../dtos/create-ecosystem.dto';
import { Ecosystem } from '../interfaces/ecosystem.interface';
import { EcosystemRepository } from '../ecosystems.repository';

@Injectable()
export class CreateEcosystemService {
  constructor(private readonly ecosystemRepo: EcosystemRepository) {}

  async createEcosystem(dto: CreateEcosystemDto): Promise<Ecosystem> {
    const existingEcosystem = await this.ecosystemRepo.findByName(dto.name);
    if (existingEcosystem) {
      throw new ConflictException('Ya existe un ecosistema con este nombre');
    }
    return await this.ecosystemRepo.create(dto);
  }

 
}

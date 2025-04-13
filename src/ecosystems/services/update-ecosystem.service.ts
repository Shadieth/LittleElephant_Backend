import { Injectable } from '@nestjs/common';
import { EcosystemRepository } from '../ecosystems.repository';
import { UpdateEcosystemDto } from '../dtos/update-ecosystem.dto';

@Injectable()
export class UpdateEcosystemService {
  constructor(private readonly ecosystemRepo: EcosystemRepository) {}

  async update(id: string, dto: UpdateEcosystemDto) {
    return this.ecosystemRepo.update(id, dto);
  }
} 
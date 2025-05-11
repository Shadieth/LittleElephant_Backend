import { Injectable, ConflictException } from '@nestjs/common';
import { CreateEcosystemDto } from '../dtos/create-ecosystem.dto';
import { Ecosystem } from '../interfaces/ecosystem.interface';
import { EcosystemRepository } from '../ecosystems.repository';

@Injectable()
export class CreateEcosystemService {
  constructor(
    private readonly ecosystemRepo: EcosystemRepository
  ) {}

  /**
   * Crea un nuevo ecosistema si no existe previamente uno con el mismo nombre.
   * @param dto - Datos del ecosistema a crear.
   * @returns El ecosistema creado.
   * @throws ConflictException si ya existe un ecosistema con el mismo nombre.
   */
  async createEcosystem(dto: CreateEcosystemDto): Promise<Ecosystem> {
    const existingEcosystem = await this.ecosystemRepo.findByName(dto.name);
    if (existingEcosystem) {
      throw new ConflictException('Ya existe un ecosistema con este nombre');
    }
    return await this.ecosystemRepo.create(dto);
  }
}


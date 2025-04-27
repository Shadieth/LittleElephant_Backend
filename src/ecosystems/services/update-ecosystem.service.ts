import { Injectable } from '@nestjs/common';
import { EcosystemRepository } from '../ecosystems.repository';
import { UpdateEcosystemDto } from '../dtos/update-ecosystem.dto';

@Injectable()
export class UpdateEcosystemService {
  constructor(
    private readonly ecosystemRepo: EcosystemRepository
  ) {}

  /**
   * Actualiza un ecosistema existente en la base de datos.
   * @param id - ID del ecosistema a actualizar.
   * @param dto - Datos nuevos para la actualización.
   * @returns El ecosistema actualizado.
   */
  async update(id: string, dto: UpdateEcosystemDto) {
    return this.ecosystemRepo.update(id, dto);
  }
}

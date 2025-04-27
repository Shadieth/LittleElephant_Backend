import { Injectable } from "@nestjs/common";
import { EcosystemRepository } from "../ecosystems.repository";

@Injectable()
export class DeleteEcosystemService {
  constructor(
    private readonly ecosystemRepo: EcosystemRepository
  ) {}

  /**
   * Elimina un ecosistema de la base de datos.
   * @param ecosystemId - ID del ecosistema a eliminar.
   */
  async deleteEcosystem(ecosystemId: string): Promise<void> {
    await this.ecosystemRepo.deleteEcosystem(ecosystemId);
  }
}


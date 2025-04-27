import { Injectable } from "@nestjs/common";
import { EcosystemRepository } from "../ecosystems.repository";
import { Ecosystem } from "../interfaces/ecosystem.interface";

@Injectable()
export class GetAllEcosystemsService {
  constructor(
    private readonly ecosystemRepo: EcosystemRepository
  ) {}

  /**
   * Obtiene todos los ecosistemas almacenados en la base de datos.
   * @returns Una lista de ecosistemas.
   */
  async getAllEcosystems(): Promise<Ecosystem[]> {
    return await this.ecosystemRepo.findAll();
  }
}

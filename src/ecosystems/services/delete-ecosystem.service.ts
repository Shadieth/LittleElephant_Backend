import { Injectable } from "@nestjs/common";
import { EcosystemRepository } from "../ecosystems.repository";

@Injectable()
export class DeleteEcosystemService {
  constructor(private readonly ecosystemRepo: EcosystemRepository) {}

    // Método para eliminar un ecosistema
    // Este método recibe el ID del ecosistema a eliminar
    async deleteEcosystem(ecosystemId: string): Promise<void> {
        await this.ecosystemRepo.deleteEcosystem(ecosystemId);
    }
}

import { Injectable } from "@nestjs/common";
import { EcosystemRepository } from "../ecosystems.repository";
import { Ecosystem } from "../interfaces/ecosystem.interface";

 
 @Injectable()
 export class GetAllEcosystemsService {
   constructor(private readonly ecosystemRepo: EcosystemRepository) {}
   
 // (Opcional) método para obtener todos
 async getAllEcosystems(): Promise<Ecosystem[]> {
    return await this.ecosystemRepo.findAll();
  }
}
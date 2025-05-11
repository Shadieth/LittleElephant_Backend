import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEcosystemDto } from './dtos/create-ecosystem.dto';
import { Ecosystem } from './interfaces/ecosystem.interface';
import { UpdateEcosystemDto } from './dtos/update-ecosystem.dto';

@Injectable()
export class EcosystemRepository {
  constructor(
    @InjectModel('Ecosystem')
    private readonly ecosystemModel: Model<Ecosystem>,
  ) {}

  /**
   * Crea un nuevo ecosistema en la base de datos.
   * @param createEcosystemDto - Datos del ecosistema a crear.
   * @returns El ecosistema creado.
   */
  async create(createEcosystemDto: CreateEcosystemDto): Promise<Ecosystem> {
    const newEcosystem = new this.ecosystemModel(createEcosystemDto);
    return await newEcosystem.save();
  }

  /**
   * Obtiene todos los ecosistemas almacenados.
   * @returns Un array de ecosistemas.
   */
  async findAll(): Promise<Ecosystem[]> {
    return this.ecosystemModel.find().exec();
  }

  /**
   * Elimina un ecosistema por su ID.
   * @param ecosystemId - ID del ecosistema a eliminar.
   */
  async deleteEcosystem(ecosystemId: string): Promise<void> {
    await this.ecosystemModel.deleteOne({ _id: ecosystemId }).exec();
  }

  /**
   * Busca un ecosistema por su nombre.
   * @param name - Nombre del ecosistema.
   * @returns El ecosistema encontrado o null.
   */
  async findByName(name: string): Promise<Ecosystem | null> {
    return this.ecosystemModel.findOne({ name }).exec();
  }

  /**
   * Actualiza los datos de un ecosistema existente.
   * @param id - ID del ecosistema a actualizar.
   * @param updateEcosystemDto - Nuevos datos del ecosistema.
   * @returns El ecosistema actualizado.
   * @throws NotFoundException si no se encuentra el ecosistema.
   */
  async update(id: string, updateEcosystemDto: UpdateEcosystemDto): Promise<Ecosystem> {
    const updatedEcosystem = await this.ecosystemModel.findByIdAndUpdate(
      id,
      { $set: updateEcosystemDto },
      { new: true }
    ).exec();

    if (!updatedEcosystem) {
      throw new NotFoundException(`Ecosistema con ID ${id} no encontrado`);
    }

    return updatedEcosystem;
  }
}



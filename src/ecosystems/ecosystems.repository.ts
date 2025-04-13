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

  async create(createEcosystemDto: CreateEcosystemDto): Promise<Ecosystem> {
    const newEcosystem = new this.ecosystemModel(createEcosystemDto);
    return await newEcosystem.save();
  }

  // (Opcional) Método para obtener todos los ecosistemas
  async findAll(): Promise<Ecosystem[]> {
    return this.ecosystemModel.find().exec();
  }

// Método para eliminar un ecosistema encontrandolo por el ID
  async deleteEcosystem(ecosystemId: string): Promise<void> {
        await this.ecosystemModel.deleteOne({ _id: ecosystemId }).exec();
    }

// Método para encontrar un ecosistema por su nombre
  async findByName(name: string): Promise<Ecosystem | null> {
    return this.ecosystemModel.findOne({ name }).exec();
  }

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


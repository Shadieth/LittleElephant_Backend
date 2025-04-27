import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, HydratedDocument } from 'mongoose';

import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { User } from './interfaces/user.interface';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel('User') private readonly userModel: Model<User>
  ) {}

  // Método para crear un nuevo usuario
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  // Método para encontrar un usuario por email
  async findByEmail(email: string): Promise<User | null> {
    return await this.userModel.findOne({ email }).exec();
  }

  // Método para encontrar un usuario por email SIN incluir el campo contraseña
  async findByEmailWithoutPassword(email: string): Promise<Partial<User> | null> {
    const user = await this.userModel.findOne({ email }).exec();
    if (!user) return null;

    const { password, ...userWithoutPassword } = user.toObject();
    return userWithoutPassword;
  }

  // Método para encontrar un usuario por ID
  async findById(id: string): Promise<User | null> {
    return await this.userModel.findById(id).exec();
  }

  // Método para obtener todos los usuarios
  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  // Método para actualizar un usuario existente por su email
  async updateUserByEmail(email: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    return await this.userModel.findOneAndUpdate(
      { email },
      updateUserDto,
      { new: true } // Devuelve el documento actualizado
    ).exec();
  }

  // Método para eliminar un usuario por email
  async deleteUserByEmail(email: string): Promise<boolean> {
    const result = await this.userModel.deleteOne({ email }).exec();
    return result.deletedCount > 0;
  }

  // Método para desbloquear un nivel para un usuario (agregándolo al array de niveles desbloqueados)
  async unlockLevel(email: string, level: number): Promise<User | null> {
    return this.userModel.findOneAndUpdate(
      { email },
      { $addToSet: { unlockedLevels: level } }, // Solo agrega el nivel si no existe ya
      { new: true }
    ).exec();
  }

  // Método para eliminar un ecosistema del array de ecosistemas de un usuario
  async deleteEcosystem(email: string, ecosystemId: string): Promise<void> {
    await this.userModel.updateOne(
      { email },
      { $pull: { ecosystems: { _id: ecosystemId } } } // Elimina el ecosistema con el ID proporcionado
    ).exec();
  }
}


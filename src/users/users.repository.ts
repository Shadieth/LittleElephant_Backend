import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './interfaces/user.interface';
import { UpdateUserDto } from './dtos/update-user.dto';
import { HydratedDocument } from 'mongoose';

@Injectable()
export class UserRepository {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  //Create a new user
  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return await createdUser.save();
  }

  //Find a user by email
  async findByEmail(email: string): Promise<User | null> {
    return await this.userModel.findOne({ email }).exec();
  }

   // Buscar un usuario sin incluir la contraseña
async findByEmailWithoutPassword(email: string): Promise<Partial<User> | null> {
  const user = await this.userModel.findOne({ email }).exec();
  if (!user) return null;

  const { password, ...userWithoutPassword } = user.toObject();
  return userWithoutPassword;
}


  //Find a user by id
  async findById(id: string): Promise<User | null> {
    return await this.userModel.findById(id).exec();
  }

  //Find all users
  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  //Update a user by email
  async updateUserByEmail(email: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    return await this.userModel.findOneAndUpdate({ email }, updateUserDto, { new: true }).exec();
  }

  async deleteUserByEmail(email: string): Promise<boolean> {
    const result = await this.userModel.deleteOne({ email }).exec();
    return result.deletedCount > 0;
  }

  async unlockLevel(email: string, level: number): Promise<User | null> {
    return this.userModel.findOneAndUpdate(
      { email },
      { $addToSet: { unlockedLevels: level } }, // solo lo agrega si no está
      { new: true }
    ).exec();
  }

  async deleteEcosystem(email: string, ecosystemId: string): Promise<void> {
    await this.userModel.updateOne(
      { email },
      { $pull: { ecosystems: { _id: ecosystemId } } }
    ).exec();
  }
}

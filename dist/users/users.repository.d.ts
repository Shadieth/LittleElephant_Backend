import { Model } from 'mongoose';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './interfaces/user.interface';
import { UpdateUserDto } from './dtos/update-user.dto';
export declare class UserRepository {
    private readonly userModel;
    constructor(userModel: Model<User>);
    create(createUserDto: CreateUserDto): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    updateUserByEmail(email: string, updateUserDto: UpdateUserDto): Promise<User | null>;
}

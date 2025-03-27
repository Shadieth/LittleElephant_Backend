import { User } from '../interfaces/user.interface';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UserRepository } from '../users.repository';
export declare class CreateUserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    create(createUserDto: CreateUserDto): Promise<User>;
    validateUserPassword(email: string, password: string): Promise<boolean>;
}

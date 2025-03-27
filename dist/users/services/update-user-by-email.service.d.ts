import { UserRepository } from '../users.repository';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { User } from '../interfaces/user.interface';
export declare class UpdateUserByEmailService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    updateUserByEmail(email: string, updateUserDto: UpdateUserDto): Promise<User | null>;
}

import { UserRepository } from '../users.repository';
import { User } from '../interfaces/user.interface';
export declare class GetUserByIdService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    findById(id: string): Promise<User | null>;
}

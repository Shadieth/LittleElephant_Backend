import { UserRepository } from '../users.repository';
import { User } from '../interfaces/user.interface';
export declare class GetUserByEmailService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    findByEmail(email: string): Promise<User | null>;
}

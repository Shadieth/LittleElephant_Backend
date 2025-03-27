import { User } from "../interfaces/user.interface";
import { UserRepository } from "../users.repository";
export declare class GetAllUsersService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    getAllUsers(): Promise<User[]>;
}

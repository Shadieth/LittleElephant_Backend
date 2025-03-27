import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './interfaces/user.interface';
import { CreateUserService } from './services/create-user.service';
import { GetUserByEmailService } from './services/get-user-by-email.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { GetAllUsersService } from './services/get-all-users.service';
import { UpdateUserByEmailService } from './services/update-user-by-email.service';
import { GetUserByIdDto, GetUserByEmailDto } from './dtos/get-user.dto';
import { GetUserByIdService } from './services/get-user-by-id.service';
export declare class UsersController {
    private readonly createUserService;
    private readonly getUserByEmailService;
    private readonly getAllUsersService;
    private readonly updateUserByEmailService;
    private readonly getUserByIdService;
    constructor(createUserService: CreateUserService, getUserByEmailService: GetUserByEmailService, getAllUsersService: GetAllUsersService, updateUserByEmailService: UpdateUserByEmailService, getUserByIdService: GetUserByIdService);
    create(createUserDto: CreateUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
    getUserByEmail(params: GetUserByEmailDto): Promise<User | null>;
    getUserById(params: GetUserByIdDto): Promise<User | null>;
    updateUserByEmail(params: GetUserByEmailDto, updateUserDto: UpdateUserDto): Promise<User | null>;
}

export interface User extends Document {
    id?: string;
    email: string;
    password: string;
    name: string;
    createdAt: Date;
}

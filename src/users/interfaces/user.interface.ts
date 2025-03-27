export interface User extends Document {
  id?: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  gender: 'male' | 'female' | 'other';
  email: string;
  password: string;
  unlockedLevels: number[]; // Niveles desbloqueados
  createdAt: Date;
}


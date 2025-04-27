// Importa la clase base Document de Mongoose
import { Document } from 'mongoose';

// Definición de la interfaz User para tipado en TypeScript
export interface User extends Document {
  // Identificador único opcional (generado automáticamente por MongoDB)
  id?: string;

  // Nombre del usuario
  firstName: string;

  // Apellido del usuario
  lastName: string;

  // Fecha de nacimiento del usuario
  birthDate: Date;

  // Género del usuario (valores permitidos: male, female, other)
  gender: 'male' | 'female' | 'other';

  // Dirección de correo electrónico del usuario
  email: string;

  // Contraseña cifrada del usuario
  password: string;

  // Lista de niveles desbloqueados por el usuario
  unlockedLevels: number[];

  // Fecha de creación del registro
  createdAt: Date;
}



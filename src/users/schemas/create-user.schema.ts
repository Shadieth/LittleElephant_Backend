import { Schema } from 'mongoose';

export const UserSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    birthDate: { type: Date, required: true },
    gender: { type: String, required: true, enum: ['male', 'female', 'other'] },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    unlockedLevels: { type: [Number], default: [1] }, // Por defecto solo el nivel 1 está desbloqueado
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false } // ✅ Esto elimina el campo __v
);


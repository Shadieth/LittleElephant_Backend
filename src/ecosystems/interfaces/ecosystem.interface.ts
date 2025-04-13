import { Document } from 'mongoose';

export interface Question {
  image: string; // Representa la URL de la imagen
  options: string[];
  correctAnswer: string;
}

export interface Ecosystem extends Document {
  id?: string;
  name: string;
  image: string;
  questions: Question[];
  createdAt: Date;
}


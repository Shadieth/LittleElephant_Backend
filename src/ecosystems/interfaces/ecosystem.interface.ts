import { Document } from 'mongoose';

// Interface que define una pregunta dentro de un ecosistema
export interface Question {
  image: string;           // URL de la imagen asociada a la pregunta
  options: string[];        // Opciones de respuesta disponibles
  correctAnswer: string;    // Respuesta correcta de la pregunta
}

// Interface que define la estructura de un ecosistema en la base de datos
export interface Ecosystem extends Document {
  id?: string;              // Identificador único (opcional)
  name: string;             // Nombre del ecosistema
  image: string;            // Imagen representativa del ecosistema
  questions: Question[];    // Conjunto de preguntas asociadas al ecosistema
  createdAt: Date;          // Fecha de creación del ecosistema
}



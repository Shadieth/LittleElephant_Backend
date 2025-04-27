import { Schema, model, Document } from 'mongoose';

// Interface que define el contrato de un Ecosystem en TypeScript
export interface Ecosystem extends Document {
  name: string;
  image: string;
  questions: {
    image: string;
    options: string[];
    correctAnswer: string;
  }[];
  createdAt: Date;
}

// Sub-schema para la estructura de cada pregunta
const questionSchema = new Schema({
  image: { type: String, required: true },           // URL de imagen de la pregunta
  options: { type: [String], required: true },        // Opciones disponibles
  correctAnswer: { type: String, required: true },    // Respuesta correcta
}, { versionKey: false });

// Esquema principal de Ecosystem
export const EcosystemSchema = new Schema({
  name: { type: String, required: true },             // Nombre del ecosistema
  image: { type: String, required: true },            // Imagen representativa del ecosistema
  questions: { type: [questionSchema], required: true }, // Array de preguntas
  createdAt: { type: Date, default: Date.now },        // Fecha de creación
}, { versionKey: false }); // Elimina el campo __v de versión de Mongoose

// Modelo de Mongoose para interactuar con la colección de Ecosystems
export const EcosystemModel = model<Ecosystem>('Ecosystem', EcosystemSchema);

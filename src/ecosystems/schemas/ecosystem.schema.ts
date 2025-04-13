import { Schema, model, Document } from 'mongoose';

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

const questionSchema = new Schema({
  image: { type: String, required: true },
  options: { type: [String], required: true },
  correctAnswer: { type: String, required: true },
}, { versionKey: false });

export const EcosystemSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  questions: { type: [questionSchema], required: true },
  createdAt: { type: Date, default: Date.now },
}, { versionKey: false });

export const EcosystemModel = model<Ecosystem>('Ecosystem', EcosystemSchema);

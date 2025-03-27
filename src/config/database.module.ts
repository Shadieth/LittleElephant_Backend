import { Module } from '@nestjs/common';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno

@Module({})
export class DatabaseModule {
  static async connect() {
    try {
      await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/littleelephant_db');
      console.log('Conexión a MongoDB establecida correctamente.');
    } catch (err) {
      console.error('Error en la conexión a MongoDB:', err);
      process.exit(1); // Salir si la conexión falla
    }
  }
}

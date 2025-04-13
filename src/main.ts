import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseModule } from './config/database.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;

  // Conectar a la base de datos
  await DatabaseModule.connect();

  // Habilitar CORS
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  // Habilitar validaciones globales
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  // Servir carpeta pública de imágenes
  app.use('/images', express.static(join(__dirname, '..', 'public/images')));

  await app.listen(port, '0.0.0.0');
  console.log(`Servidor corriendo en http://localhost:${port}`);
}

bootstrap();


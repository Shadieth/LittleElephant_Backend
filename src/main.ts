// Importaciones principales de NestJS y módulos propios
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseModule } from './config/database.module';
import { ValidationPipe } from '@nestjs/common';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  // Crear instancia de la aplicación NestJS
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;

  // Conectar manualmente a la base de datos usando el módulo de configuración
  await DatabaseModule.connect();

  // Habilitar CORS para permitir peticiones de cualquier origen
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept',
  });

  // Habilitar validaciones globales en las peticiones
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,             // Elimina propiedades no permitidas automáticamente
    forbidNonWhitelisted: true,   // Lanza error si llegan propiedades no permitidas
    transform: true,              // Transforma payloads a objetos DTO automáticamente
  }));

  // Servir archivos estáticos de la carpeta pública (por ejemplo, imágenes)
  app.use('/images', express.static(join(__dirname, '..', 'public/images')));

  // Arrancar el servidor y escuchar en el puerto especificado
  await app.listen(port, '0.0.0.0');
  console.log(`Servidor corriendo en http://localhost:${port}`);
}

// Ejecutar la función principal
bootstrap();

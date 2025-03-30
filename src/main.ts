import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DatabaseModule } from './config/database.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT ?? 3000;

  // Conectar a la base de datos
  await DatabaseModule.connect();

  // Habilitar CORS
  app.enableCors({
    origin: '*', // Permite cualquier origen (lo ideal sería especificar solo los orígenes necesarios)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    allowedHeaders: 'Content-Type, Accept', // Cabeceras permitidas
  });

  // Habilitar las validaciones globalmente
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Elimina propiedades no definidas en el DTO
    forbidNonWhitelisted: true, // Lanza error si se encuentran propiedades no válidas
    transform: true, // Transforma los datos entrantes en el tipo correcto
  }));

  await app.listen(port, '0.0.0.0');
  console.log(`Servidor corriendo en http://localhost:${port}`);
}

bootstrap();

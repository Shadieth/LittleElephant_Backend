"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose_1 = require("mongoose");
// Definición del esquema de usuario para MongoDB
exports.UserSchema = new mongoose_1.Schema({
    // Nombre del usuario
    firstName: { type: String, required: true },
    // Apellido del usuario
    lastName: { type: String, required: true },
    // Fecha de nacimiento
    birthDate: { type: Date, required: true },
    // Género del usuario (solo valores permitidos)
    gender: { type: String, required: true, enum: ['male', 'female', 'other'] },
    // Email único del usuario
    email: { type: String, required: true, unique: true },
    // Contraseña cifrada
    password: { type: String, required: true },
    // Array de niveles desbloqueados por el usuario (por defecto empieza con el nivel 1)
    unlockedLevels: { type: [Number], default: [1] },
    // Fecha de creación del registro
    createdAt: { type: Date, default: Date.now },
}, {
    versionKey: false, // Elimina el campo __v que Mongoose añade por defecto
});

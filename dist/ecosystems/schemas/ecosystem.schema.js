"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcosystemModel = exports.EcosystemSchema = void 0;
const mongoose_1 = require("mongoose");
// Sub-schema para la estructura de cada pregunta
const questionSchema = new mongoose_1.Schema({
    image: { type: String, required: true }, // URL de imagen de la pregunta
    options: { type: [String], required: true }, // Opciones disponibles
    correctAnswer: { type: String, required: true }, // Respuesta correcta
}, { versionKey: false });
// Esquema principal de Ecosystem
exports.EcosystemSchema = new mongoose_1.Schema({
    name: { type: String, required: true }, // Nombre del ecosistema
    image: { type: String, required: true }, // Imagen representativa del ecosistema
    questions: { type: [questionSchema], required: true }, // Array de preguntas
    createdAt: { type: Date, default: Date.now }, // Fecha de creación
}, { versionKey: false }); // Elimina el campo __v de versión de Mongoose
// Modelo de Mongoose para interactuar con la colección de Ecosystems
exports.EcosystemModel = (0, mongoose_1.model)('Ecosystem', exports.EcosystemSchema);

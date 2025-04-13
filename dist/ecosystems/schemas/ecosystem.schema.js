"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcosystemModel = exports.EcosystemSchema = void 0;
const mongoose_1 = require("mongoose");
const questionSchema = new mongoose_1.Schema({
    image: { type: String, required: true },
    options: { type: [String], required: true },
    correctAnswer: { type: String, required: true },
}, { versionKey: false });
exports.EcosystemSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    questions: { type: [questionSchema], required: true },
    createdAt: { type: Date, default: Date.now },
}, { versionKey: false });
exports.EcosystemModel = (0, mongoose_1.model)('Ecosystem', exports.EcosystemSchema);

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let UserRepository = class UserRepository {
    constructor(userModel) {
        this.userModel = userModel;
    }
    //Create a new user
    create(createUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdUser = new this.userModel(createUserDto);
            return yield createdUser.save();
        });
    }
    //Find a user by email
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.findOne({ email }).exec();
        });
    }
    // Buscar un usuario sin incluir la contraseña
    findByEmailWithoutPassword(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userModel.findOne({ email }).exec();
            if (!user)
                return null;
            const _a = user.toObject(), { password } = _a, userWithoutPassword = __rest(_a, ["password"]);
            return userWithoutPassword;
        });
    }
    //Find a user by id
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.findById(id).exec();
        });
    }
    //Find all users
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.find().exec();
        });
    }
    //Update a user by email
    updateUserByEmail(email, updateUserDto) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.userModel.findOneAndUpdate({ email }, updateUserDto, { new: true }).exec();
        });
    }
    deleteUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.userModel.deleteOne({ email }).exec();
            return result.deletedCount > 0;
        });
    }
    unlockLevel(email, level) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.userModel.findOneAndUpdate({ email }, { $addToSet: { unlockedLevels: level } }, // solo lo agrega si no está
            { new: true }).exec();
        });
    }
    deleteEcosystem(email, ecosystemId) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.userModel.updateOne({ email }, { $pull: { ecosystems: { _id: ecosystemId } } }).exec();
        });
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserRepository);

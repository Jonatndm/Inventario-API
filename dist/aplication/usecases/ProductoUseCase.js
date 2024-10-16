"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoUseCase = void 0;
class ProductoUseCase {
    constructor(productoRepo) {
        this.productoRepo = productoRepo;
    }
    obtenerTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productoRepo.obtenerTodos();
        });
    }
    obtenerPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productoRepo.obtenerPorId(id);
        });
    }
    crear(producto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.productoRepo.crear(producto);
        });
    }
    actualizar(id, producto) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.productoRepo.actualizar(id, producto);
        });
    }
    eliminar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.productoRepo.eliminar(id);
        });
    }
}
exports.ProductoUseCase = ProductoUseCase;

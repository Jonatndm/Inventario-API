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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productoRouter = void 0;
const express_1 = __importDefault(require("express"));
const ProductoUseCase_1 = require("../../aplication/usecases/ProductoUseCase");
const InMemoryProductoRepository_1 = require("../repositories/InMemoryProductoRepository");
const Producto_1 = require("../../domain/entities/Producto");
const router = express_1.default.Router();
exports.productoRouter = router;
const productoRepo = new InMemoryProductoRepository_1.InMemoryProductoRepository();
const productoUseCase = new ProductoUseCase_1.ProductoUseCase(productoRepo);
// Obtener todos los productos
router.get('/productos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const productos = yield productoUseCase.obtenerTodos();
    res.json(productos);
}));
// Obtener producto por id
router.get('/productos/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const producto = yield productoUseCase.obtenerPorId(req.params.id);
    if (producto) {
        res.json(producto);
    }
    else {
        res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
}));
// Crear producto
router.post('/productos', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, nombre, descripcion, precio, cantidad } = req.body;
    const nuevoProducto = new Producto_1.Producto(id, nombre, descripcion, precio, cantidad);
    yield productoUseCase.crear(nuevoProducto);
    res.status(201).json(nuevoProducto);
}));
// Actualizar producto
router.put('/productos/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, descripcion, precio, cantidad } = req.body;
    const productoActualizado = new Producto_1.Producto(req.params.id, nombre, descripcion, precio, cantidad);
    yield productoUseCase.actualizar(req.params.id, productoActualizado);
    res.json(productoActualizado);
}));
// Eliminar producto
router.delete('/productos/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield productoUseCase.eliminar(req.params.id);
    res.status(204).send();
}));

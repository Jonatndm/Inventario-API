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
exports.InMemoryProductoRepository = void 0;
class InMemoryProductoRepository {
    constructor() {
        this.productos = [
            {
                "id": "1",
                "nombre": "Laptop HP",
                "descripcion": "Laptop HP 15 pulgadas, 8GB RAM, 256GB SSD",
                "precio": 850.00,
                "cantidad": 10
            },
            {
                "id": "2",
                "nombre": "Smartphone Samsung",
                "descripcion": "Samsung Galaxy S21, 128GB, 8GB RAM",
                "precio": 999.99,
                "cantidad": 15
            },
            {
                "id": "3",
                "nombre": "Mouse Logitech",
                "descripcion": "Mouse inalámbrico Logitech M590, Bluetooth",
                "precio": 25.00,
                "cantidad": 50
            },
            {
                "id": "4",
                "nombre": "Monitor Dell",
                "descripcion": "Monitor Dell 24 pulgadas, Full HD, 60Hz",
                "precio": 150.00,
                "cantidad": 7
            },
            {
                "id": "5",
                "nombre": "Teclado Mecánico",
                "descripcion": "Teclado Mecánico Razer BlackWidow, Switches verdes",
                "precio": 120.00,
                "cantidad": 20
            },
            {
                "id": "6",
                "nombre": "Impresora Canon",
                "descripcion": "Impresora multifunción Canon Pixma G5020, inyección de tinta",
                "precio": 200.00,
                "cantidad": 5
            },
            {
                "id": "7",
                "nombre": "Auriculares Sony",
                "descripcion": "Auriculares Sony WH-1000XM4, cancelación de ruido",
                "precio": 350.00,
                "cantidad": 12
            },
            {
                "id": "8",
                "nombre": "Tablet iPad",
                "descripcion": "Apple iPad 10.2 pulgadas, 64GB, Wi-Fi",
                "precio": 329.00,
                "cantidad": 8
            }
        ];
    }
    obtenerTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productos;
        });
    }
    obtenerPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.productos.find(producto => producto.id === id) || null;
        });
    }
    crear(producto) {
        return __awaiter(this, void 0, void 0, function* () {
            this.productos.push(producto);
        });
    }
    actualizar(id, producto) {
        return __awaiter(this, void 0, void 0, function* () {
            const index = this.productos.findIndex(p => p.id === id);
            if (index !== -1) {
                this.productos[index] = producto;
            }
        });
    }
    eliminar(id) {
        return __awaiter(this, void 0, void 0, function* () {
            this.productos = this.productos.filter(producto => producto.id !== id);
        });
    }
}
exports.InMemoryProductoRepository = InMemoryProductoRepository;

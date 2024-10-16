"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ProductoController_1 = require("./infrastructure/controllers/ProductoController");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use('/api', ProductoController_1.productoRouter);
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

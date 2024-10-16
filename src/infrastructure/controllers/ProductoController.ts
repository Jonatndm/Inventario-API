import express from 'express';
import { ProductoUseCase } from '../../aplication/usecases/ProductoUseCase';
import { InMemoryProductoRepository } from '../repositories/InMemoryProductoRepository';
import { Producto } from '../../domain/entities/Producto';

const router = express.Router();
const productoRepo = new InMemoryProductoRepository();
const productoUseCase = new ProductoUseCase(productoRepo);

router.get('/productos', async (req, res) => {
    const productos = await productoUseCase.obtenerTodos();
    res.json(productos);
});

router.get('/productos/:id', async (req, res) => {
    const producto = await productoUseCase.obtenerPorId(req.params.id);
    if (producto) {
        res.json(producto);
    } else {
        res.status(404).json({ mensaje: 'Producto no encontrado' });
    }
});

router.post('/productos', async (req, res) => {
    const { id, nombre, descripcion, precio, cantidad } = req.body;
    const nuevoProducto = new Producto(id, nombre, descripcion, precio, cantidad);
    await productoUseCase.crear(nuevoProducto);
    res.status(201).json(nuevoProducto);
});

router.put('/productos/:id', async (req, res) => {
    const { nombre, descripcion, precio, cantidad } = req.body;
    const productoActualizado = new Producto(req.params.id, nombre, descripcion, precio, cantidad);
    await productoUseCase.actualizar(req.params.id, productoActualizado);
    res.json(productoActualizado);
});

router.delete('/productos/:id', async (req, res) => {
    await productoUseCase.eliminar(req.params.id);
    res.status(204).send();
});

export { router as productoRouter };

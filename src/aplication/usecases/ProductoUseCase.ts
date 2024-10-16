import { ProductoRepository } from '../../domain/repositories/ProductoRepository';
import { Producto } from '../../domain/entities/Producto';

export class ProductoUseCase {
    constructor(private productoRepo: ProductoRepository) {}

    async obtenerTodos(): Promise<Producto[]> {
        return this.productoRepo.obtenerTodos();
    }

    async obtenerPorId(id: string): Promise<Producto | null> {
        return this.productoRepo.obtenerPorId(id);
    }

    async crear(producto: Producto): Promise<void> {
        await this.productoRepo.crear(producto);
    }

    async actualizar(id: string, producto: Producto): Promise<void> {
        await this.productoRepo.actualizar(id, producto);
    }

    async eliminar(id: string): Promise<void> {
        await this.productoRepo.eliminar(id);
    }
}

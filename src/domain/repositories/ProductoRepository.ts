import { Producto } from '../entities/Producto';

export interface ProductoRepository {
    obtenerTodos(): Promise<Producto[]>;
    obtenerPorId(id: string): Promise<Producto | null>;
    crear(producto: Producto): Promise<void>;
    actualizar(id: string, producto: Producto): Promise<void>;
    eliminar(id: string): Promise<void>;
}
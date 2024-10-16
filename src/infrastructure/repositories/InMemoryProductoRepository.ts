import { ProductoRepository } from '../../domain/repositories/ProductoRepository';
import { Producto } from '../../domain/entities/Producto';

export class InMemoryProductoRepository implements ProductoRepository {
    private productos: Producto[] = [
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

    async obtenerTodos(): Promise<Producto[]> {
        return this.productos;
    }

    async obtenerPorId(id: string): Promise<Producto | null> {
        return this.productos.find(producto => producto.id === id) || null;
    }

    async crear(producto: Producto): Promise<void> {
        this.productos.push(producto);
    }

    async actualizar(id: string, producto: Producto): Promise<void> {
        const index = this.productos.findIndex(p => p.id === id);
        if (index !== -1) {
            this.productos[index] = producto;
        }
    }

    async eliminar(id: string): Promise<void> {
        this.productos = this.productos.filter(producto => producto.id !== id);
    }
}

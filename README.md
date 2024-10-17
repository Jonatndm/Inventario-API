# API de Gestión de Productos en Inventario

Esta es una API sencilla para gestionar productos en un inventario, que incluye operaciones CRUD (Crear, Leer, Actualizar, Eliminar) utilizando **Node.js** y **TypeScript**. Los datos de los productos se almacenan en memoria para fines de demostración.

## Tabla de Contenidos
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Cómo Ejecutar el Proyecto](#cómo-ejecutar-el-proyecto)
- [Endpoints](#endpoints)
- [Principios de Clean Code Aplicados](#principios-de-clean-code-aplicados)
- [Arquitectura Aplicada](#arquitectura-aplicada)
- [Ejemplos de Uso](#ejemplos-de-uso)
  
## Estructura del Proyecto

El proyecto sigue la Arquitectura Limpia (Clean Architecture) con las siguientes capas:

- **Capa de Dominio**: Define las interfaces y la lógica de negocio (casos de uso).
- **Capa de Aplicación**: Controladores y servicios que manejan las solicitudes HTTP.
- **Capa de Infraestructura**: Implementación de repositorios y otras dependencias, en este caso, los datos en memoria.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/inventario-api.git
   
   Navega a la carpeta del proyecto:
    cd inventario-api
    npm install

## Cómo Ejecutar el Proyecto

1. Compila el codigo TypeScript
    npm run build

2. Inicia el servidor
    npm run start

El servidor estara ejecutandose en http://localhost:3000

## Endpoints
Obtener todos los productos
    URL: /api/productos
    Método: GET

Obtener un producto por ID
    URL: /api/productos/{id}
    Método: GET

Crear un nuevo producto
    URL: /api/productos
    Método: POST
    Cuerpo:
    {
        "id": "9",
        "nombre": "Nuevo Producto",
        "descripcion": "Descripción del producto",
        "precio": 100.00,
        "cantidad": 20
    }

Actualizar un producto
    URL: /api/productos/{id}
    Método: PUT
    Cuerpo:
    {
        "nombre": "Producto Actualizado",
        "descripcion": "Descripción actualizada",
        "precio": 120.00,
        "cantidad": 15
    }

Eliminar un producto
    URL: /api/productos/{id}
    Método: DELETE

## Principios de Clean Code Aplicados
Nombres Descriptivos: Todas las variables, clases y funciones tienen nombres claros y auto-explicativos. Ejemplo: ProductoService, crearProducto(), listarProductos().

Funciones Cortas y Específicas: Las funciones hacen una sola cosa. Por ejemplo, listarProductos() solo se encarga de devolver todos los productos.

Eliminación de Comentarios Innecesarios: En lugar de comentarios, el código es lo suficientemente claro para que se entienda sin anotaciones.

Principios SOLID:
Responsabilidad Única (Single Responsibility): Cada clase y función tiene una única responsabilidad. Ejemplo: ProductoService maneja la lógica de negocio para los productos.

Inversión de Dependencias (Dependency Inversion): Se usa un repositorio abstracto (interfaz) en la capa de dominio, desacoplando la lógica de la implementación concreta (memoria en este caso).

## Arquitectura Aplicada
El proyecto sigue una versión simplificada de Arquitectura Limpia, separando las responsabilidades en capas claras:

Capa de Dominio:

Define el modelo Producto y la interfaz ProductoRepository.
Define los casos de uso en ProductoService.
Capa de Aplicación:

Controladores que reciben las solicitudes HTTP y llaman a los casos de uso apropiados.
Capa de Infraestructura:

Implementa el repositorio de productos en memoria (InMemoryProductoRepository), para almacenar y gestionar los productos.

## Ejemplos de uso

1. Obtener todos los productos:
    GET http://localhost:3000/api/productos

2. Crear un producto nuevo:
    POST http://localhost:3000/api/productos \
    -H 'Content-Type: application/json' \
    -d '{
        "id": "9",
        "nombre": "Nuevo Producto",
        "descripcion": "Descripción del producto",
        "precio": 100.00,
        "cantidad": 20
    }'

3. Actualizar un producto existente:
    http://localhost:3000/api/productos/9 \
    -H 'Content-Type: application/json' \
    -d '{
        "nombre": "Producto Actualizado",
        "descripcion": "Descripción actualizada",
        "precio": 120.00,
        "cantidad": 15
    }'

4. Eliminar un producto:
    DELETE http://localhost:3000/api/productos/9

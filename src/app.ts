import express from 'express';
import { productoRouter } from './infrastructure/controllers/ProductoController';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/api', productoRouter);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

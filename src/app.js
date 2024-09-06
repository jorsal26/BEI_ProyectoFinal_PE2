import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import { Server } from 'socket.io';
import fs from 'fs/promises'
import path from 'path'

const productosFilePath = path.resolve('data', 'productos.json')

const app = express();
const PORT = process.env.PORT || 8080;

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use(express.static('src/public'));
app.use(express.static(path.join(__dirname, 'public')));

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');


// Ruta para la vista home
app.get('/', async (req, res) => {
try {
    const data = await fs.readFile(productosFilePath, 'utf8');
    const productos = JSON.parse(data);
    res.render('index', { productos, title: 'Lista de Productos' });
} catch (err) {
    res.status(500).send('Error al leer el archivo JSON');
}
});

// Ruta para la vista realtimeproducts
app.get('/realtimeproducts', async (req, res) => {
try {
    const data = await fs.readFile(productosFilePath, 'utf8');
    const productos = JSON.parse(data);
    res.render('realTimeProducts', { productos, title: 'Productos en Tiempo Real' });
} catch (err) {
    res.status(500).send('Error al leer el archivo JSON');
}
});


const httpServer = app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})
const socketServer = new Server(httpServer);


socketServer.on('connection', (socket) => {
    console.log('Nuevo cliente conectado...');

    socket.on('agregarProducto', async (producto) => {
    try {
        const data = await fs.readFile(productosFilePath, 'utf8');
        const productos = JSON.parse(data);
        productos.push(producto);
        await fs.writeFile(productosFilePath, JSON.stringify(productos, null, 2));
        socketServer.emit('productosActualizados', productos);
    } catch (err) {
        console.error('Error al agregar producto:', err);
    }
    });

    socket.on('eliminarProducto', async (id) => {
    try {
        const data = await fs.readFile(productosFilePath, 'utf8');
        let productos = JSON.parse(data);
        productos = productos.filter(producto => producto.id !== id);
        await fs.writeFile(productosFilePath, JSON.stringify(productos, null, 2));
        socketServer.emit('productosActualizados', productos);
    } catch (err) {
        console.error('Error al eliminar producto:', err);
    }
    });

    socket.on('actualizarProducto', async (productoActualizado) => {
    try {
        const data = await fs.readFile(productosFilePath, 'utf8');
        let productos = JSON.parse(data);
        productos = productos.map(producto => 
        producto.id === productoActualizado.id ? productoActualizado : producto
        );
        await fs.writeFile(productosFilePath, JSON.stringify(productos, null, 2));
        socketServer.emit('productosActualizados', productos);
    } catch (err) {
        console.error('Error al actualizar producto:', err);
    }
    });
});

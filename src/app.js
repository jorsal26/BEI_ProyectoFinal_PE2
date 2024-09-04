import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import { Server } from 'socket.io';
import viewsRouter from './routes/views.router.js';
import productsRouter from './routes/products.router.js'
import cartsRouter from './routes/carts.router.js'
import productManager from './classes/ProductManager.js';

const app = express();
const PORT = process.env.PORT || 8080;

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('./src/public'));

// Router
app.use('/api/products', productsRouter)
app.use('/api/carts', cartsRouter)

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');

// Views Handler
app.use('/', viewsRouter);


//ruta para probar el handlebars
app.get('/test-hbs', (req, res) => {
    const userTest= {
        name: 'Jorge',
        surname: 'Salinas',
        age: 52
    }
    //renderizar una vista de handlebars
    res.render('index',userTest);
})

// const SERVER_PORT = 8080;
// app.listen(SERVER_PORT, () => {
//     console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
// });

const httpServer = app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
})

const socketServer = new Server(httpServer);

const products = productManager.getProducts();


socketServer.on('connection', (socket) => {
    console.log('Nuevo cliente conectado...');
    socketServer.emit('products', products);

    socket.on('newProduct', (product) => {
        productManager.addProduct(product.title, product.description, product.thumbnail, product.stock, product.price);
        socketServer.emit('products', products);
    });

    socket.on('deleteProduct', (product) => {
        const productToDelete = Number(product);
        
        productManager.deleteProduct(productToDelete);

        socketServer.emit('products', products);
    });
});

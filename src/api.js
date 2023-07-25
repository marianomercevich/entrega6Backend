import express from 'express';
import handlebars from 'express-handlebars';
import productsRouter from './routs/products.router.js';
import cartsRouter from './routs/carts.router.js';
import viewRouter from './routs/views.router.js';
import mongoose, {mongo} from 'mongoose';

const app = express();

/* 
const io = new Server(httpServer);

app.use((req, res, next) => {
    req.io = io;
    next();
}); */

app.use(express.json());
app.engine('handlebars', handlebars.engine());
app.set('views', './src/views');
app.set('view engine', 'handlebars');
app.use(express.static('./src/public'));

app.get('/', (req, res) => res.render('index'));
app.use('/products', viewRouter);
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

/* io.on('connection', socket => {
    console.log('new client connected');
    socket.on('productList', data => {
        io.emit('updateProducts', data);
    });
}); */
await mongoose.connect(
    "mongodb+srv://CoderUser:123@cluster0.ghinxw0.mongodb.net/ProyectoFinal"
);
const httpServer = app.listen(8080, () => console.log('Server Up'));

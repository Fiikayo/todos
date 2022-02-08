import express from "express";
import bodyParser from 'body-parser';
import todosRoutes from './routes/todosRoutes.js';
import { errorHandler } from "./middleware/errorMiddleware.js";
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/api',todosRoutes);

app.use(errorHandler);

app.get('/', (req, res) => {
    res.send('Hello to Todo list!');
});

export default app
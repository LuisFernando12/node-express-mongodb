import express, { json } from 'express';
import connection from './config/db/index.js';
import route from './routes.js';


connection.on('error', console.log.bind(console, 'Connection error'));
const app = express();
app.use(json());
app.use(route);
export default app;
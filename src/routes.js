import { Router } from "express";
import AuthorController from "./controller/authorController.js";
import BookController from "./controller/bookController.js";
import publishingHouseController from "./controller/publishingHouseController.js";

const route = Router();

route.get('/',(req, res)=>{res.status(200).send('Formação Node Alura')});

route.get('/books', BookController.get);
route.get('/book/:id', BookController.find);
route.post('/book', BookController.create);
route.put('/book/:id',BookController.update); 
route.delete('/book/:id',BookController.delete); 

route.get('/authors', AuthorController.get);
route.get('/author/:id', AuthorController.find);
route.post('/author', AuthorController.create);
route.put('/author/:id',AuthorController.update); 
route.delete('/author/:id',AuthorController.delete); 

route.get('/publishingHouses', publishingHouseController.get);
route.get('/publishingHouse/:id', publishingHouseController.find);
route.post('/publishingHouse', publishingHouseController.create);
route.put('/publishingHouse/:id',publishingHouseController.update); 
route.delete('/publishingHouse/:id',publishingHouseController.delete); 

export default route;


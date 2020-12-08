/**
 * Author : Jino Thomas
 * Created on : 07-Dec-2020
 * File name : start.js
 * Description :  This is where the application starts!
 */

import express from 'express';
import { cars_router } from '../src/cars/routes/cars.routes.js';
import bodyParser  from 'body-parser';



const app = express();
const port = 3000;

app.use('/',cars_router);
app.use(bodyParser.json());


 app.listen(port,()=>{
     console.log(`Server is up and running on http://localhost:${port}`);
 })

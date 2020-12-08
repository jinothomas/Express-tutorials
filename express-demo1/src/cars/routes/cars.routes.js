/**
 * Author : Jino Thomas
 * Created on : 07-Dec-2020
 * File name : cars.routes.js
 * Description : It includes all the cars related routes
 */

import express from 'express';
import {carsServices} from '../services/cars.services.js'

const router = express.Router();

router.use((req,res,next)=>{
    console.log('Middleware function');
    next();
}).get('/getCarInfo',(req,res)=>{
    res.send(carsServices.getCarInfo(req.body));

}).post('/addCarInfo',(req,res)=>{

}).put('/updateCarInfo',(req,res)=>{
    
}).delete('/removeCarInfo',(req,res)=>{

});



export const cars_router = router;
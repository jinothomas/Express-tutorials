/**
 * Author : Jino Thomas
 * Created on : 08-Dec-2020
 * File name : cars.repository.js
 * Description : The file contains the repository calls 
 */
import  graphql from 'graphql';
import {cars_schema} from '../schema/cars.schema.js';
import {cars} from '../util/cars.util.js';

 export const carsRepository = {

    getCarsInfo(req_query) {
        graphql(cars_schema,req_query ,cars).then(res=>{
            return res;
        })
        return req_query;
     }
 }
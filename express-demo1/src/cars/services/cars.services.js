/**
 * Author : Jino Thomas
 * Created on : 08-Dec-2020
 * File name : cars.services.js
 * Description : This file contains the cars related service files
 */
import { carsRepository } from '../repository/cars.repository.js'


 export const carsServices = {
    
    getCarInfo(query){
       return carsRepository.getCarsInfo(query);
    },
        
    addCarInfo(){},

    updateCarInfo(){},
    
    removeCarInfo(){}
 }
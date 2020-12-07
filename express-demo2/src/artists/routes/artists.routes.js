/**
 * Author : Jino Thomas
 * Created On :  06-Dec-2020
 * File Name : artists.routes.js
 * Description : This file is used to write the routes used for artists module.
 * 
 */


import  express  from 'express';
import   { artistService } from '../services/artists.services.js';
const router = express.Router();


// Middleware to handle some additional logic
router
  .use((req, res, next) => {
    console.log(`____________________Request details______________________\n Time  : ${Date.now()} \n --------  Request Details --------\n Method : ${
      req.method
    }
     --------- Response Details --------${res} `);
    next();
  })
  .get("/artist_info", (req, res) => {
    res.send(artistService.getArtistInfo());
  })
  .post("/add_artist_info", (req, res) => {
    res.send(artistService.addArtistInfo(req.body));
  });

  export const artists_router = router;

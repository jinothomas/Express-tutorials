/**
 * Author : Jino Thomas
 * Created On :  06-Dec-2020
 * File Name : artists.routes.js
 * Description : This file is used to write the routes used for artists module.
 * 
 */


import  express  from 'express';
import   {  albumsService } from '../services/albums.services.js';
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
  .get("/album_info", (req, res) => {
    // do something
    res.send(albumsService.getAlbumInfo(req));
  })
  .post("/add_album_info", (req, res) => {
    // do something
    res.send(albumsService.addAlbumInfo(req.body));
  });

  export const albums_router = router;

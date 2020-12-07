/**
 * Author : Jino Thomas
 * Created On :  06-Dec-2020
 * File Name : start.js
 * Description : This file is the Starting point of the application 
 * 
 */
import  express  from 'express';
import { artists_router } from '../src/artists/routes/artists.routes.js';
import { albums_router } from '../src/albums/routes/albums.routes.js';
import bodyParser  from 'body-parser';
const app = express();
const port = 3000;



app.use(bodyParser.json());

// Set the routes to the application
app.use('/',albums_router);
app.use('/',artists_router);


// Server start up -->
app.listen(port, () => {
    console.log(`The application up and running on http://localhost:${port}`);
})


/**
 * Author : Jino Thomas
 * Created On :  06-Dec-2020
 * File Name : artists.repository.js
 * Description : This is the place where the DB calls are made.
 * 
 */
import { artists} from '../util/artists.util.js';

 
export const artistsRepository = {
 
    getArtistInfo : ()  => {

        return artists;
    },
    addArtistInfo : (artist) => {
        artists.push(artist)
        return artists;
    }
};

/**
 * Author : Jino Thomas
 * Created On :  06-Dec-2020
 * File Name : artists.repository.js
 * Description : This is the place where the DB calls are made.
 * 
 */
import { albums } from '../util/albums.util.js';

 
export const albumsRepository = {
 
    getAlbumInfo : ( request ) => {
    
        return albums;
    },
    addAlbumInfo : (album) => {
        albums.push(album);
        return albums;
    
    },
    removeAlbumInfo : (album) => {
        albums = _filter(albums,(alb_obj)=>{
            return alb_obj.name !== album.name;
        })
        return albums;
    }
};

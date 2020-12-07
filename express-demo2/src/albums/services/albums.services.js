/**
 * Author : Jino Thomas
 * Created On :  06-Dec-2020
 * File Name : artists.services.js
 * Description : Segragate each methods as services.
 * 
 */
import  { albumsRepository }  from '../repository/albums.repository.js';

export const albumsService = {
  getAlbumInfo: (req) => {
    return albumsRepository.getAlbumInfo(req);
  }, 
  addAlbumInfo: (album) => {
    return albumsRepository.addAlbumInfo(album);
  },
};

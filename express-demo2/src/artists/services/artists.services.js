/**
 * Author : Jino Thomas
 * Created On :  06-Dec-2020
 * File Name : artists.services.js
 * Description : Segragate each methods as services.
 * 
 */
import  { artistsRepository }  from '../repository/artists.repository.js';

export const artistService = {
  getArtistInfo: () => {
    return artistsRepository.getArtistInfo();
  },
  addArtistInfo: (artist) => {
    return artistsRepository.addArtistInfo(artist);
  }
};

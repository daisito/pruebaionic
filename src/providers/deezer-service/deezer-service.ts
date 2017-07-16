import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the DeezerServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class DeezerServiceProvider {

  public deezerAPI : string;

  constructor(public http: Http) {
    //this.deezerAPI = "https://api.deezer.com/"; ///Usar esto cuando voy a compilar y poner en dispositivo 
    this.deezerAPI = "/deezerAPI/";  /////correr esto cuando voy a estar en modo en desarrollo

    
  }

  getUsers(){
    return this.http.get('https://api.myjson.com/bins/pxf4j')
    .map(res => res.json() )
    
  }

  getUserDetail(userID){
    return this.http.get(this.deezerAPI + "user/" + userID )
    .map(res => res.json() )
    
  }

  getUserPlaylists(userID){
   return this.http.get(this.deezerAPI + "user/" + userID + "/playlists")
    .map(res => res.json() ) 
  }

  getPlaylistSongs(playlistID){
   return this.http.get(this.deezerAPI + "playlist/" + playlistID + "/tracks")
    .map(res => res.json() ) 
  }
  
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { CancionesPage } from '../canciones/canciones';

import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';

/**
 * Generated class for the PlaylistsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-playlists',
  templateUrl: 'playlists.html',
  providers : [DeezerServiceProvider]
})
export class PlaylistsPage {
  //me creo la variable que voy a recibir de la vista anterior
  public user : any;
  public playlists : any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ds : DeezerServiceProvider
  ) {
    //aca en el constructor recibo el parametro que pase de la anterior vista a la actual
      this.user = this.navParams.get('user');
      this.playlists = [];
      //console.log(this.user);
  }

  goToCanciones(playlists){
    this.navCtrl.push(CancionesPage, { playlists : playlists });
  }

  ionViewDidLoad() {
    this.ds.getUserPlaylists(this.user.id).subscribe(data =>{
      this.playlists = data.data;
      //console.log(this.playlists);
    });
  }

}

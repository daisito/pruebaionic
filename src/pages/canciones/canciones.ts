import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';

/**
 * Generated class for the CancionesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html',
  providers : [DeezerServiceProvider]
})
export class CancionesPage {

  public playlists : any;
  public songs : any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ds : DeezerServiceProvider
  ) {
    this.playlists = this.navParams.get('playlists');
    this.songs = [];
    //console.log(this.playlists);
  }

  ionViewDidLoad() {
    this.ds.getPlaylistSongs(this.playlists.id).subscribe(data =>{
        this.songs = data.data;
        //console.log(this.songs);
    });
  }

}

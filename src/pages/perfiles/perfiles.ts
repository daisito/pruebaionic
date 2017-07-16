import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';

import { PlaylistsPage } from '../playlists/playlists';

import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';

//import { Observable } from "rxjs/Rx";
//import 'rxjs/add/observable/merge';

/**
 * Generated class for the PerfilesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html',
  providers : [DeezerServiceProvider]
})
export class PerfilesPage {

   public users: any;
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public ds : DeezerServiceProvider
    //public loadingCtrl: LoadingController
  ) {
      this.users = [];

      //this.loader = this.loadingCtrl.create();
    }

  goToPlaylists(user){
    this.navCtrl.push(PlaylistsPage,{ user : user });
  }

  ionViewDidLoad() {

    //this.loader.present();

    this.ds.getUsers().subscribe(usersIDs =>{
      usersIDs.map(userID =>{
        this.ds.getUserDetail(userID).subscribe(user =>{
          this.users.push(user);
          //console.log(this.users);
        });
        
      });
    });
    
    
  }


}

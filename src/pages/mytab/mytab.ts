import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { USERS } from '../../app/liste-user'
import { User } from '../../app/user'
import { ServiceProvider} from '../../providers/service/service'
@Component({
  selector: 'page-mytab',
  templateUrl: 'mytab.html'
})
export class MyTabPage {

  constructor(
  		public navCtrl: NavController,
      public toastCtrl: ToastController,
  	) {}

   presentToast(position: string) {
    let toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000,
      position: position
    });

    toast.present(toast);
    }
}
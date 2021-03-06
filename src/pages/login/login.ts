import { AuthProvider } from './../../providers/auth/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private credential: Object ={
    email:'',
    password:''
  };
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  /*login() {
    this.authService.login(this.credential);
  }*/

  logout() {
    this.authService.logout();
  }
}

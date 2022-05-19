import { HttpServiceProvider } from './../../providers/http-service/http-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  public number : any = {}; 

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public http: HttpServiceProvider
              ) {

                let number_id = this.navParams.get('number_id');
                this. http.get('number', number_id)
              .subscribe (data => {
                this.number= data;
              })

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
   }

}
import { HttpServiceProvider } from './../../providers/http-service/http-service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient, } from '@angular/common/http'

import { TestPage } from '../test/test';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    
    public numbers : any

  constructor(
    public navCtrl: NavController,
    public http: HttpServiceProvider
  ) {
    
              this.http.getAll('number')
              .subscribe (data => {
                this.numbers = data;
              })
   } 

   


  getNumbersInfo(id) {
      this.navCtrl.push(TestPage, {
        'number_id': id,
      })
  }

}

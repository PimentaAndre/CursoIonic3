import { HttpServiceProvider } from './../../providers/http-service/http-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
//import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {
  public number = {
    name: '',
    price:'',
    type: '',
    mark: '',
    img: ''
  };

  constructor(public navCtrl: NavController,
              public toastCtrl: ToastController,
              public navParams: NavParams,
              public http: HttpServiceProvider,
              //public camera: Camera,
              public authService: AuthProvider
              ){

  }

  ionViewCanEnter() {
    return this.authService.userIsLogged
  }

  saveNumber(number){
   
        this.http.post('number', number)
            /*.subscribe (data =>{
          let toast = this.toastCtrl.create({
            message: data.msg,
            duration: 3000
          });
          toast.present();*/
  }

  /*getPhoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
     this.number.img = base64Image
    }, (err) => {
     // Handle error
     console.log(err);
    });
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

}


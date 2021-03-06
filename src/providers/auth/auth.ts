import { HttpServiceProvider } from './../http-service/http-service';
import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import { Storage } from '@ionic/storage';

@Injectable()
export class AuthProvider {

  private msg: string = 'É preciso logar para acessar!'

  constructor(
    public http: HttpServiceProvider,
    public storage: Storage,
    public toastCtrl: ToastController
    ) {
    
  }

  login(credentials) {
      this.http.post('auth/login', credentials)
        /*.subscribe (data => {
        this.storage.set('token', data.token)
      })*/,
      (error => {
        let msg = error.json()
        let toast = this.toastCtrl.create({
          message: msg.msg,
          duration: 3000
        });
        toast.present();
      }
    );
          
}

    userIsLogged() {
        return this.storage.get('token').then (val =>{
          if (val){
            return val;
          } else {
            let toast = this.toastCtrl.create({
              message: this.msg,
              duration: 3000
            });
            toast.present();

            return false;
          }
        })
    }

    logout(){
      this.storage.remove('token')
    }
}

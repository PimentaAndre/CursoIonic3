import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { ResourceLoader } from '@angular/compiler';
import { Injectable } from '@angular/core';


@Injectable()
export class HttpServiceProvider {
  private url :string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(public http: HttpClient) {
    console.log('Hello HttpServiceProvider Provider');
  }

  getAll(endpoint) {
    return this.http.get(`${this.url}/${endpoint}`)
              .map(res => {
                return res
              })
  }

  get(endpoint, id) {
        return this.http.get(`${this.url}/${endpoint}/${id}`)
                    .map(res => {
                      return res
                    });
  }

  post(endpoint, Resource) {
    /*let Headers = new HttpHeaders();
        HttpHeaders.append('Content-Type', 'application/json')
    

    let options = new RequestOptions 
    {(HttpHeaders :  HttpHeaders });

    return this.http.post(`${this.url}/${endpoint}`, Resource , options)
        .map(res => {
          return res.json()
        });*/
  
  }
}

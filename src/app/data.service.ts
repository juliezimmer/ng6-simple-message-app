import { Injectable } from '@angular/core';

// This service will be used to communicate with the data API, so the HTTP Client will be used. 
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class DataService {

   // creating an instance of the HttpClient
   constructor(private http: HttpClient) { }

   // call to data API for fake user information
   getUsers(){
      return this.http.get('https://jsonplaceholder.typicode.com/users');
   }
}

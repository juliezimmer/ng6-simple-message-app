import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
   selector: 'app-users',
   templateUrl: './users.component.html',
   styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
   // this object holds the data returned by the API call with user information.
   users$: Object;

   constructor(private data: DataService) { }

   ngOnInit() {
      // any code in this method, ngOnInit, will execute when this component loads
      this.data.getUsers().subscribe(
         data => this.users$ = data
      )
   }

}

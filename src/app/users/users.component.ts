import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../data.service';


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
      this.data.getUsers().subscribe(
         data => this.users$ = data
      )
   }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
   selector: 'app-users',
   templateUrl: './users.component.html',
   styleUrls: ['./users.component.scss'],
   animations:[
      trigger('listStagger', [
         transition('* <=> *', [
            query(':enter', 
            [
               style({ opacity: 0, transform: 'translateY(-15px)'}), 
               stagger('50ms',
               animate('550ms ease-out',
            style({ opacity: 1, transform: 'translateY(0px)'})))
            ], { optional: true })
         ])
      ])
   ]
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

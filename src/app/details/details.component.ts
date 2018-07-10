import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
   selector: 'app-details',
   templateUrl: './details.component.html',
   styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
   // define a property for user. It will be of type Object.
   user$: Object;

   // pass the dataService to the constructor (injection) and an instance of the activatedRoute
   constructor(private data: DataService, private route: ActivatedRoute) { 
      // this is a reference to the route: ActivatedRoute.
      // This gets the id of the params that are in the URL.
      this.route.params.subscribe(params => this.user$ = params.id);
   }

   ngOnInit() {
   }

}

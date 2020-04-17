import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    items: Array<any>;

  constructor( public firebaseService:ServiceService,
            
  ) { }

 
 ngOnInit() {
   this.firebaseService.getUsers()
    .subscribe(result => {
      this.items = result;
     
    })





  }

}
import { Component, OnInit } from '@angular/core';

import { SeubServiceService } from '../services/seub-service.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  con:number=0
  constructor(private co:SeubServiceService){

  }
  ngOnInit(): void {
    
  }
  
  counerser(){
    this.con++
    this.co.incr(this.con)
  }
  
  

}

import { Component,OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import { SeubServiceService } from '../services/seub-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  counter:number=0;
 
  constructor(private plus:SeubServiceService){

  }
  ngOnInit(): void {
    this.plus.subject$.subscribe((el:any) => {
      this.counter=el;
    })
  }
  getCounter(){

  }

}

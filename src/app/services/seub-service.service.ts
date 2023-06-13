import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SeubServiceService {
subject$=new Subject

  constructor() { }
  incr(countser:any){
      this.subject$.next(countser)
     
  }
  
}

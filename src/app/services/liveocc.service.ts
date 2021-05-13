import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LiveoccService {


  private DATA=[
    {"time":"9 AM to 10 AM", "count":20},
    {"time":"10 AM to 11 AM", "count":50},
    {"time":"11 AM to 12 AM","count":10},
    {"time":"12 AM to 1 PM","count":60},
    {"time":"1 PM to 2 PM","count":70}
  ]; 

  constructor() { }

  getData():Observable<object[]>{
    return of(this.DATA);
  }
}

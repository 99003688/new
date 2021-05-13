import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OccupancyService {

  constructor(private _http : HttpClient) { 
  }

  public getCurrentOccupancy():Observable<object>{
    return this._http.get("http://localhost:8081/page");
  }
  public getLastOccupancy():Observable<object>{
    return this._http.get("http://localhost:8081/lastpage");
  }
}

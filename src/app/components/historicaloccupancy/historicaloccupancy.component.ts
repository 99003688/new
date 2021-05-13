import { Component, OnInit } from '@angular/core';
import { OccupancyService } from 'src/app/services/occupancy.service';

@Component({
  selector: 'app-historicaloccupancy',
  templateUrl: './historicaloccupancy.component.html',
  styleUrls: ['./historicaloccupancy.component.css']
})
export class HistoricaloccupancyComponent implements OnInit {

  currentOccupancyDetails=null;

  constructor(private occupancyService: OccupancyService) {
    this.getCurrentOccupancyDetails();
   }

  ngOnInit(): void {
  }
  getCurrentOccupancyDetails(){
    this.occupancyService.getCurrentOccupancy().subscribe(
      (resp)=>{
        console.log(resp);
        this.currentOccupancyDetails=resp;
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}

//ts file
import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { OccupancyService } from 'src/app/services/occupancy.service';

am4core.useTheme(am4themes_animated);


@Component({
  selector: 'app-liveoccupancy',
  templateUrl: './liveoccupancy.component.html',
  styleUrls: ['./liveoccupancy.component.css']
})
export class LiveoccupancyComponent {

  private chart : am4charts.XYChart;
  private data:object[]=null;
  responseData = null;
  lastOccupancyDetails=null;

  constructor(private zone:NgZone, private liveService:OccupancyService){
    this.getCurrentOccupancy();
    this.getLastOccupancyDetails();
  };
  
  //for live occupancy
  getCurrentOccupancy(){
    this.liveService.getCurrentOccupancy().subscribe(
      (resp)=>{
        console.log(resp);
        this.responseData=resp;
        this.ngAfterViewInit();
      },
      (err)=>{
        console.log(err);
      }
    );
  }

  //for last occupancy
  getLastOccupancyDetails(){
    this.liveService.getLastOccupancy().subscribe(
      (resp)=>{
        console.log(resp);
        this.lastOccupancyDetails=resp;
      },
      (err)=>{
        console.log(err);
      }
    );
  }


  //to implement charts
  ngAfterViewInit(){
this.zone.runOutsideAngular(()=> {
  let chart=am4core.create("line-chart",am4charts.XYChart);;
  let title=chart.titles.create();
  title.text="Occupancy Count by Time";

  
  /*this.liveService.getCurrentOccupancy()
  .subscribe(data=>this.data=<any>data);*/

  chart.data=this.responseData;

  let categoryAxis=chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.title.text="Time Intervals";
  categoryAxis.dataFields.category="time";

  let valueAxisY=chart.yAxes.push(new am4charts.ValueAxis())
valueAxisY.title.text="Occupancy Counts";
valueAxisY.renderer.minWidth=20;

let seriesNames=["count"];
for(let i=0;i<1;i++){

let series=chart.series.push(new am4charts.LineSeries());
series.dataFields.categoryX="time";
series.dataFields.valueY=seriesNames[i];
series.name=seriesNames[i];

let bullet=series.bullets.push(new am4charts.CircleBullet());
bullet.circle.strokeWidth=2;
bullet.circle.radius=4;
bullet.tooltipText="time : {categoryX} \n count: {valueY} {name}";

}
chart.legend=new am4charts.Legend();
this.chart=chart;

})
  }

  ngOnDestroy(){
this.zone.runOutsideAngular(()=>
{
  if (this.chart)
  {
    this.chart.dispose();
  }
})
  }


}
  
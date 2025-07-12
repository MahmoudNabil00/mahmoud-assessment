import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WidgetData } from '../models/widget-data.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  getIndicatorWidgetsData():Observable<WidgetData[]>{
    return of([
      {
        label:'16/20',
        subLabel:'Under Maintenance',
        colorOpacity:'dark',
        chartData: {
          labels: ['Completed', 'Remaining'],
          datasets: [
            {
              data: [99],
              backgroundColor: ['#00C5D6', '#E0E0E0'],
              borderWidth: 0
            }
          ]
        },
      },
      {
        label:'375/500',
        subLabel:'Active Vehicles',
        colorOpacity:'dark',
        chartData:    {
          labels: ['Completed', 'Remaining'],
          datasets: [
            {
              data: [75],
              backgroundColor: ['#00C5D6', '#E0E0E0'],
              borderWidth: 0
            }
          ]
        },
      },
      {
        label:'300/302',
        subLabel:'Active Trip',
        colorOpacity:'dark',
        chartData:{
          labels: ['Completed', 'Remaining'],
          datasets: [
            {
              data: [80],
              backgroundColor: ['#00C5D6', '#E0E0E0'],
              borderWidth: 0
            }
          ]
        },
      },
      {
        label:'4',
        subLabel:'Queue Maintenance',
        colorOpacity:'mid'
      },
      {
        label:'100',
        subLabel:'Stopped Vehicles',
        colorOpacity:'mid'
      },
      {
        label:'2',
        subLabel:'In-Active Trips',
        colorOpacity:'mid'
      },
      {
        label:'300',
        subLabel:'Total Drivers ',
        colorOpacity:'light'
      },
      {
        label:'60',
        subLabel:'Total Fleets',
        colorOpacity:'light'
      },
      {
        label:'7',
        subLabel:'Total Departments',
        colorOpacity:'light'
      },
    ])
  }
}



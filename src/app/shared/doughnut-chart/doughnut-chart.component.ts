import { Component, computed, input, OnInit, signal, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'mahmoud-doughnut-chart',
  imports: [BaseChartDirective],
  templateUrl: './doughnut-chart.component.html',
  styleUrl: './doughnut-chart.component.scss'
})
export class DoughnutChartComponent implements OnInit {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  doughnutChartType = input<any>('doughnut');
  percentage = input<number>(75) ; // This will be displayed in the center
  doughnutChartData  = input<ChartData<'doughnut'>>() 

  remainingPercentage = computed(() => 100 - this.percentage() )

  _doughnutChartData = computed(() => {
    const currentDataSets : any =  this.doughnutChartData()
    const currentData = currentDataSets.datasets[0].data!
    currentDataSets.datasets[0].data = [...currentData,this.remainingPercentage()]
    return currentDataSets
  })


  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '80%',
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true
      }
    },
    elements: {
      arc: {
        borderWidth: 0
      }
    }
  };


  ngOnInit() {
    // this.updateChartData()
  }

  public updateChartData(): void {
    // this.doughnutChartData.datasets[0].data = [percentage, remaining];
    //   this.chart.update();
  } 
}

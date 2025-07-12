import { Component, input } from '@angular/core';
import { WidgetData } from '../../models/widget-data.interface';
import { DoughnutChartComponent } from "../doughnut-chart/doughnut-chart.component";

@Component({
  selector: 'mahmoud-widgets-indicator',
  imports: [DoughnutChartComponent],
  templateUrl: './widgets-indicator.component.html',
  styleUrl: './widgets-indicator.component.scss'
})
export class WidgetsIndicatorComponent {
  widgetData = input.required<WidgetData>()
}

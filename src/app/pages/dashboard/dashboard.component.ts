import { Component, inject, OnInit } from '@angular/core';
import { WidgetsIndicatorComponent } from "../../shared/widgets-indicator/widgets-indicator.component";
import { DashboardService } from '../../services/dashboard.service';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../../modules/prime-ng.module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TablesComponent } from "../../shared/tables/tables.component";
import { TableService } from '../../services/table.service';

@Component({
  selector: 'mahmoud-dashboard',
  imports: [WidgetsIndicatorComponent, CommonModule, PrimeNgModule, ReactiveFormsModule, TablesComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  dashboardService = inject(DashboardService)
  tableService = inject(TableService)
  search = new FormControl('')
  ngOnInit(): void {
    
  }
}

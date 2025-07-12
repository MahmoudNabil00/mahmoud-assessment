import { Component, input } from '@angular/core';
import { PrimeNgModule } from '../../modules/prime-ng.module';
import { Table } from '../../models/table.interface';
import { ImgsComponent } from "../imgs/imgs.component";

@Component({
  selector: 'mahmoud-tables',
  imports: [PrimeNgModule, ImgsComponent],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.scss',
})
export class TablesComponent {
  title = input<{ icon: string; time: string; title: string }>();
  tableData = input.required<Table>();
}

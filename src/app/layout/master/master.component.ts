import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { PrimeNgModule } from '../../modules/prime-ng.module';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { HeaderComponent } from "../header/header.component";
@Component({
  selector: 'app-master',
  imports: [PrimeNgModule, ReactiveFormsModule, FormsModule, RouterOutlet, SidebarComponent, HeaderComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.scss'
})
export class MasterComponent {

constructor() {}

ngOnInit() { }


}

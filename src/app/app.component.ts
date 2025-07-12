import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNgModule } from './modules/prime-ng.module';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  imports: [PrimeNgModule, ReactiveFormsModule, FormsModule, RouterOutlet,],
  templateUrl: './app.component.html',
  styleUrl: './app.scss'
})
export class AppComponent {
  themeService = inject(ThemeService)
}

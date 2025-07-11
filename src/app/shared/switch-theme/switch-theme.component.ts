import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'mahmoud-switch-theme',
  imports: [],
  templateUrl: './switch-theme.component.html',
  styleUrl: './switch-theme.component.scss'
})
export class SwitchThemeComponent {
  themeService = inject(ThemeService)
  switch(){
    this.themeService.switchTheme()
  }
}

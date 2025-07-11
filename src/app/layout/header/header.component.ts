import { Component, inject, OnInit, signal } from '@angular/core';
import { ImgsComponent } from '../../shared/imgs/imgs.component';
import { AvatarComponent } from '../../shared/avatar/avatar.component';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { OpenCloseSate } from './state.enum';
import { SwitchThemeComponent } from "../../shared/switch-theme/switch-theme.component";
import { NavigationItemComponent } from "../../shared/navigation-item/navigation-item.component";
import { MenuMode } from '../../shared/navigation-item/mode.enum';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'mahmoud-header',
  imports: [ImgsComponent, AvatarComponent, CommonModule, SwitchThemeComponent, NavigationItemComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  router = inject(Router)
  currentUrl = 'dashboard'
  ngOnInit(): void {
    this.currentUrl = this.router.url
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isCollapse.set(false)
        this.currentUrl = event.url
      }
    });
  }
  menuMode = MenuMode
  isCollapse = signal<boolean>(false)
  stateOpenClose = OpenCloseSate

  collapse(state?:OpenCloseSate){
    this.isCollapse.update(currentState=>{
      return !currentState
    })
  }
  addUser(){
    this.router.navigate(['/add-user'])
  }

}

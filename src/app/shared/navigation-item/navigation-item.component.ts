import { AfterViewInit, Component, computed, ElementRef, inject, input, output, ViewChild } from '@angular/core';
import { MenuMode } from './mode.enum';
import { MenuItems } from '../../models/menu-items.interface';
import { ImgsComponent } from "../imgs/imgs.component";
import { PrimeNgModule } from '../../modules/prime-ng.module';
import { Router, RouterModule } from '@angular/router';
import { ActiveMenuService } from '../../services/active-menu.service';

@Component({
  selector: 'mahmoud-navigation-item',
  imports: [ImgsComponent,PrimeNgModule,RouterModule],
  templateUrl: './navigation-item.component.html',
  styleUrl: './navigation-item.component.scss'
})
export class NavigationItemComponent implements AfterViewInit{
  menuMode = MenuMode
  mode = input<MenuMode>(MenuMode.sidebarOpen)
  items = input<MenuItems[] | undefined>(undefined)
  _items = computed(()=> !!this.items() ? this.items() : this.menuItems)
  router = inject(Router)
  activeMenuService = inject(ActiveMenuService)
  onClickButton = output()
  @ViewChild('container', { static: true }) container!: ElementRef;
  menuItems : MenuItems[] = [
    {
      label:'Dashboard',
      icon:'assets/svg/dashboard-icon.svg',
      url:'dashboard'
    },
    {
      label:'Report',
      icon:'assets/svg/report-icon.svg',
      url:''
    },
    {
      label:'Organization',
      icon:'assets/svg/organization-icon.svg',
      url:'',
      isCollapsed:true,
      items:[
        {
          label:'Users',
          icon:'assets/svg/users-icon.svg',
          url:'add-user',
          isCollapsed:true,
        },
      ]
    },
  ]
  addUser(item:MenuItems){
    this.onClickButton.emit()
  }

  ngAfterViewInit() {

  }
}

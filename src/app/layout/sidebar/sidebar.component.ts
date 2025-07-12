import { Component, computed, signal } from '@angular/core';
import { NavigationItemComponent } from "../../shared/navigation-item/navigation-item.component";
import { AvatarComponent } from "../../shared/avatar/avatar.component";
import { ImgsComponent } from "../../shared/imgs/imgs.component";
import { SwitchThemeComponent } from "../../shared/switch-theme/switch-theme.component";

@Component({
  selector: 'mahmoud-sidebar',
  imports: [NavigationItemComponent, AvatarComponent, ImgsComponent, SwitchThemeComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  isOpen = signal<boolean>(false)
  toggleSidebar(){
    this.isOpen.update(currentState=>{
      return !currentState
    })
  }
  sideBarMode = computed(()=> this.isOpen() ? 0 : 1)
}

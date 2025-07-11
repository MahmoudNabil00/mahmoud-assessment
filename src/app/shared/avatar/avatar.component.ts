import { Component, input } from '@angular/core';

@Component({
  selector: 'mahmoud-avatar',
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.scss'
})
export class AvatarComponent {
  src = input<string>('assets/imgs/Profile.png')
  width = input<number>(120)
  alt = input<string>('Image')
}

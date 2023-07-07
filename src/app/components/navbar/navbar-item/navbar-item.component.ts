import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html'
})
export class NavbarItemComponent {
  @Input() link = '';
}

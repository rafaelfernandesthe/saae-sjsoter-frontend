import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuActive = false;

  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('.navbar')) {
      this.isMenuActive = false;
    }
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
    // Variável para controlar se o sidebar está aberto ou fechado
    isSidebarOpen: boolean = true;

    constructor() {}
  
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }

}

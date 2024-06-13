import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
    selector: 'app-pages',
    standalone: true,
    templateUrl: './pages.component.html',
    styleUrl: './pages.component.css',
    imports: [RouterModule, HeaderComponent, SidebarComponent,FooterComponent]
})
export class PagesComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}

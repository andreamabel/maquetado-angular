import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-links',
  templateUrl: './nav-links.component.html',
  styleUrls: ['./nav-links.component.css']
})
export class NavLinksComponent {
  linksVisibleResponsive(){
    if (window.innerWidth <= 800) {
      const links = document.querySelector('.header_links')
      links.classList.toggle("visible");
    }
  }
}

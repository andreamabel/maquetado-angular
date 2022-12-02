import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  linksVisibleResponsive(){
    if (window.innerWidth <= 800) {
      const links = document.querySelector('.header_links')
      links.classList.toggle("visible");
    }
  }
}

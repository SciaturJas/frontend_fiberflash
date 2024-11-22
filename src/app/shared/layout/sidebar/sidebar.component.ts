import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuclose() {
    const body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('sidebar-pushcontent') === false) {
      body.classList.add('menu-close');
    } else {
      if (window.innerWidth <= 992) {
        body.classList.add('menu-close');
      }
    }
  }
}

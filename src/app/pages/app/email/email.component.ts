import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  innermenuopen() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.toggle('innermenu-close');
  }
}

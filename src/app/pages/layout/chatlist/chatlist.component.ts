import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatlist',
  templateUrl: './chatlist.component.html',
  styleUrls: ['./chatlist.component.scss']
})
export class ChatlistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openChat() {
    const chatbar: any = document.getElementById('chatbox');
    chatbar.style.display = 'block';
    chatbar.classList.add('d-block');
  }

}

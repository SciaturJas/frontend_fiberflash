import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeChat() {
    const chatbar: any = document.getElementById('chatbox');
    chatbar.style.display = 'none';
    chatbar.classList.remove('d-block');
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'chat-page',
  templateUrl: './chat-page.component.html',
  styleUrl: './chat-page.component.css',
  providers: []
})
export class ChatPageComponent {
  constructor() {}

  ngOnInit() {
    console.log('[OK] Component: chat-page');
  }
}

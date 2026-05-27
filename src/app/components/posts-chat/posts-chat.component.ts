import { Component } from '@angular/core';

interface Conversation {
  id: string;
  name: string;
  initial: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
}

interface Message {
  id: number;
  text: string;
  sent: boolean;
  time: string;
}

@Component({
  selector: 'posts-chat',
  templateUrl: './posts-chat.component.html',
  styleUrl: './posts-chat.component.css'
})
export class PostsChatComponent {

  newMessage = '';

  conversations: Conversation[] = [
    {
      id: '1',
      name: 'Alice Johnson',
      initial: 'A',
      lastMessage: 'Hey, are you free this weekend?',
      time: '2m',
      unread: 2,
      online: true
    },
    {
      id: '2',
      name: 'Bob Smith',
      initial: 'B',
      lastMessage: 'Thanks for the recommendation!',
      time: '1h',
      unread: 0,
      online: false
    },
    {
      id: '3',
      name: 'Carol White',
      initial: 'C',
      lastMessage: 'Let me know when you\'re ready',
      time: '3h',
      unread: 1,
      online: true
    },
    {
      id: '4',
      name: 'David Lee',
      initial: 'D',
      lastMessage: 'Great project btw 👏',
      time: 'Yesterday',
      unread: 0,
      online: false
    },
    {
      id: '5',
      name: 'Emma Wilson',
      initial: 'E',
      lastMessage: 'Can we schedule a call?',
      time: '2d',
      unread: 0,
      online: false
    }
  ];

  activeConversation: Conversation = this.conversations[0];

  allMessages: Record<string, Message[]> = {
    '1': [
      { id: 1, text: 'Hey! How are you doing?', sent: false, time: '10:02 AM' },
      { id: 2, text: "I'm great! Just finished a big project", sent: true, time: '10:03 AM' },
      { id: 3, text: 'Oh nice! What kind of project?', sent: false, time: '10:05 AM' },
      { id: 4, text: 'A social network app — Angular frontend', sent: true, time: '10:06 AM' },
      { id: 5, text: 'That sounds really cool! I love Angular', sent: false, time: '10:07 AM' },
      { id: 6, text: "Yeah it's been fun. Lots of UI work lately", sent: true, time: '10:09 AM' },
      { id: 7, text: 'Are you working with a team?', sent: false, time: '10:10 AM' },
      { id: 8, text: 'Just me right now, but planning to expand', sent: true, time: '10:12 AM' },
      { id: 9, text: 'Hey, are you free this weekend?', sent: false, time: '10:15 AM' },
      { id: 10, text: "Let me check my schedule and get back to you!", sent: true, time: '10:16 AM' },
    ],
    '2': [
      { id: 1, text: 'I checked out that book you mentioned', sent: false, time: 'Yesterday' },
      { id: 2, text: 'What did you think?', sent: true, time: 'Yesterday' },
      { id: 3, text: 'Thanks for the recommendation!', sent: false, time: '1h ago' },
    ],
    '3': [
      { id: 1, text: 'Are we still on for the review?', sent: true, time: '4h ago' },
      { id: 2, text: 'Let me know when you\'re ready', sent: false, time: '3h ago' },
    ],
    '4': [
      { id: 1, text: 'Just saw the latest build', sent: false, time: 'Yesterday' },
      { id: 2, text: 'Great project btw 👏', sent: false, time: 'Yesterday' },
      { id: 3, text: 'Thanks, means a lot!', sent: true, time: 'Yesterday' },
    ],
    '5': [
      { id: 1, text: 'Can we schedule a call?', sent: false, time: '2d ago' },
    ]
  };

  get messages(): Message[] {
    return this.allMessages[this.activeConversation.id] || [];
  }

  selectConversation(conv: Conversation) {
    this.activeConversation = conv;
    conv.unread = 0;
  }

  sendMessage() {
    const text = this.newMessage.trim();
    if (!text) return;

    const msgs = this.allMessages[this.activeConversation.id];
    msgs.push({
      id: msgs.length + 1,
      text,
      sent: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    this.activeConversation.lastMessage = text;
    this.newMessage = '';
  }

  onKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
}

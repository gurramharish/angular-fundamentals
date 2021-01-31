import { Component } from '@angular/core';
import { Event, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { env } from 'process';
import { slideInAnimation } from './app.animation';
import { MessageService } from './messages/message.service';

import { AuthService } from './user/auth.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [slideInAnimation]
})
export class AppComponent {
  pageTitle = 'GHK';
  loading = true;

  constructor(private authService: AuthService, private router: Router, private messageService: MessageService) {
    router.events.subscribe((event: Event) => {
      this.checkRouterEvent(event);
    });
  }

  get isMessagesDisplayed(): boolean {
    return this.messageService.isDisplayed;
  }

  toogleMessages(): void {
    this.messageService.isDisplayed = !this.messageService.isDisplayed;
    this.messageService.isDisplayed ? this.router.navigate([{ outlets: {popup: ['messages'] } }])
    : this.router.navigate([{ outlets: {popup: null} }]);
  }

  checkRouterEvent(event: Event): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    } else if (event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError) {
        this.loading = false;
    }
  }

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  logOut(): void {
    this.authService.logout();
    console.log('Log out');
    this.router.navigate(['/welcome']);
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Angular Fundamentals App!';
  name = 'Harish Kumar Gurram';
  userName = 'Harish Kumar';
  calling = false;
  callingNumber: string;

  callPhone(phoneNumber?: string): void {
    this.callingNumber = phoneNumber;
    this.calling = !this.calling;
  }
}

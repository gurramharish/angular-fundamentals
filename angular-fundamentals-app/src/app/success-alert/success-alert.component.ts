import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.sass'],
  interpolation: ['_-', '-_']
})
export class SuccessAlertComponent implements OnInit {

  date = new Date();
  isDisabled = true;
  showSuccessMessage = true;

  constructor() { }

  ngOnInit(): void {
    this.enableClose();
  }

  enableClose(): void {
    setTimeout(() => {
      this.isDisabled = false;
    }, 3000);
  }

  closeMessage(): void {
    this.showSuccessMessage = false;
    setTimeout(() => {
      this.showSuccessMessage = true;
      this.isDisabled = true;
      this.enableClose();
    }, 1000);
  }

}

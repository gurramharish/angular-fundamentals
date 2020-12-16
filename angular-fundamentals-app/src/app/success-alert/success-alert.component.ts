import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.sass'],
  interpolation: ['_-', '-_']
})
export class SuccessAlertComponent implements OnInit {

  date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}

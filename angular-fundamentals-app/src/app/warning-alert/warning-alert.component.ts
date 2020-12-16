import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<p>This a warning, you are in danger!</p>',
  styles: [`
    p {
      padding: 5px;
      background-color: mistyrose;
      border: 1px solid red;
      border-radius: 5px;
    }
  `
  ]
})
export class WarningAlertComponent {
}

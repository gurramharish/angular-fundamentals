import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: '<p>This a warning, you are in danger!</p>',
  styles: [`
    p {
      color: red;
    }
  `,
  `
    p {
      text-decoration: line-through;
    }
  `
  ]
})
export class WarningAlertComponent {
}

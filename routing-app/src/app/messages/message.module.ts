import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { MessageComponent } from './message.component';

const routes: Routes = [
  {
    path: 'messages',
    component: MessageComponent,
    outlet: 'popup'
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MessageComponent
  ],
  exports: [RouterModule]
})
export class MessageModule { }

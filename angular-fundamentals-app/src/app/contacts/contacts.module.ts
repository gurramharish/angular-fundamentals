import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ContactsComponent } from './contacts.component';
import { ContactCountComponent } from '../contacts/contact-count/contact-count.component';
import { ContactDetailComponent } from '../contacts/contact-detail/contact-detail.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailGuard } from './contact-detail.guard';

const routes: Routes = [
  {path: 'contacts/:id', component: ContactDetailComponent, canActivate: [ContactDetailGuard]}
];

@NgModule({
  declarations: [
    ContactsComponent,
    ContactCountComponent,
    ContactDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule, ContactsComponent]
})
export class ContactsModule { }

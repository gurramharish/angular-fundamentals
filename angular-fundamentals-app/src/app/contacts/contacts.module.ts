import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ContactsComponent } from './contacts.component';
import { ContactCountComponent } from '../contacts/contact-count/contact-count.component';
import { ContactDetailComponent } from '../contacts/contact-detail/contact-detail.component';

@NgModule({
  declarations: [
    ContactsComponent,
    ContactCountComponent,
    ContactDetailComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ContactsComponent]
})
export class ContactsModule { }

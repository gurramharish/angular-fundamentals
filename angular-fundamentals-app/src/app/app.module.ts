import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServerDirectiveComponent } from './server/server-directive/server-directive.component';
import { ServerClassComponent } from './server/server-class/server-class.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactCountComponent } from './contacts/contact-count/contact-count.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerDirectiveComponent,
    ServerClassComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ContactsComponent,
    ContactDetailComponent,
    ContactCountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

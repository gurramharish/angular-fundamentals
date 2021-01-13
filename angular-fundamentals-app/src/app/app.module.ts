import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServerDirectiveComponent } from './server/server-directive/server-directive.component';
import { ServerClassComponent } from './server/server-class/server-class.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule } from '@angular/forms';
import { ContactsModule } from './contacts/contacts.module';
import { AppRoutingModule } from './app.routing.module';
import { TemporaryModule } from './temps/temporary.module';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServerDirectiveComponent,
    ServerClassComponent,
    WarningAlertComponent,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ContactsModule,
    AppRoutingModule,
    TemporaryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

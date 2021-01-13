import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ServerComponent } from './server/server.component';

const routes: Routes = [
  {path: 'contacts', component: ContactsComponent},
  {path: 'contacts/:id', component: ContactDetailComponent},
  {path: 'welcome', component: ServerComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: false})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

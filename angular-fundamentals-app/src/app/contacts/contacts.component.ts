import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactsService } from './contacts.service';
import { Contact } from './models/contact.intreface';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {
  constructor(private contactsService: ContactsService) {}
  myContacts: Contact[];
  displayContacts = false;
  outlineNone = 'none';
  errorMessage: string;

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe({
      next: contacts => this.myContacts = contacts,
      error: err => this.errorMessage = err
    });
  }

  toogleContacts(): void {
    this.displayContacts = !this.displayContacts;
  }

  handleDeleteContact(contact: Contact): boolean {
    console.log(`Received contact to delete is ${JSON.stringify(contact)}`);
    this.myContacts = this.myContacts.filter((cntct: Contact) => cntct.mobile !== contact.mobile);
    return true;
  }
}

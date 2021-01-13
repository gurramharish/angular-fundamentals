import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactsService } from './contacts.service';
import { Contact } from './models/contact.intreface';

@Component({
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {
  constructor(private contactsService: ContactsService) {}
  myContacts: Contact[];
  displayContacts = false;
  outlineNone = 'none';
  errorMessage: string;
  name = 'Harish Kumar Gurram';
  userName = 'Harish Kumar';
  calling = false;
  callingNumber: string;

  callPhone(phoneNumber?: string): void {
    this.callingNumber = phoneNumber;
    this.calling = !this.calling;
  }

  ngOnInit(): void {
    if (!this.contactsService.myContacts) {
      this.contactsService.getContacts().subscribe({
        next: contacts => {
          this.myContacts = contacts;
          this.contactsService.myContacts = contacts;
        },
        error: err => this.errorMessage = err
      });
    } else {
      this.myContacts = this.contactsService.myContacts;
    }
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

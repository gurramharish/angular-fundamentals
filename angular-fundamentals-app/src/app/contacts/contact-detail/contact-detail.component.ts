import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact.intreface';

@Component({
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.sass']
})
export class ContactDetailComponent implements OnInit {

  pageTitle = 'Contact Detail';
  contact: Contact;
  @Output()
  delete: EventEmitter<Contact> = new EventEmitter();

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private contactsService: ContactsService) { }

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log(`Contact Id : ${id}`);
    setTimeout(() => {
      if (this.contactsService.myContacts) {
        this.contact = this.contactsService.myContacts.filter(contact => contact.id === id)[0];
      } else {
        this.contactsService.getContacts().subscribe({
          next: contacts => {
            this.contactsService.myContacts = contacts;
            this.contact = this.contactsService.myContacts.filter(contact => contact.id === id)[0];

          },
          error: err => console.log('Error while fetching contact details :: ' + id)
        });
      }
    }, 1000);
  }

  onDelete(contact: Contact): void {
    this.delete.emit(contact);
  }

  onBack(): void {
    this.router.navigate(['/contacts']);
  }

}

import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Contact } from '../models/contact.intreface';

@Component({
  selector: 'app-contact-count',
  templateUrl: './contact-count.component.html',
  styleUrls: ['./contact-count.component.sass']
})
export class ContactCountComponent implements OnInit, OnChanges {


  @Input() contacts: Contact[];
  numberOfContacts: number;
  fontColor = 'red';

  constructor() { }

  ngOnInit(): void {
    console.log('OnInit in contact count');
    this.numberOfContacts = this.contacts.length;
  }

  ngOnChanges(changes): void {
    if (!changes.contacts.firstChange) {
      console.log('Change invoked in contact count', changes);
      this.numberOfContacts = this.contacts.length;
    }
  }
}

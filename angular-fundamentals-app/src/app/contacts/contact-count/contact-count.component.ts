import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models/contact.intreface';

@Component({
  selector: 'app-contact-count',
  templateUrl: './contact-count.component.html',
  styleUrls: ['./contact-count.component.sass']
})
export class ContactCountComponent implements OnInit {


  @Input() contacts: Contact[];
  numberOfContacts: number;
  fontColor = 'red';

  constructor() { }

  ngOnInit(): void {
    this.numberOfContacts = this.contacts.length;
  }

}

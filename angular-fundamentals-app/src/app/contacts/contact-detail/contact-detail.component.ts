import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../models/contact.intreface';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.sass']
})
export class ContactDetailComponent implements OnInit {

  @Input() contact: Contact;

  constructor() { }

  ngOnInit(): void {
  }

}

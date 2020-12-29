import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.sass']
})
export class ContactsComponent implements OnInit {

  myContacts = [
    {
      name: 'Harish Kumar Gurram',
      mobile: '+91-9123456789'
    },
    {
      name: 'Chanti',
      mobile: '+44-39948885757'
    },
    {
      name: 'Madhu',
      mobile: '+91-3939848457'
    }
  ];

  displayContacts = false;
  outlineNone = 'none';

  constructor() { }

  ngOnInit(): void {
  }

  toogleContacts(): void {
    this.displayContacts = !this.displayContacts;
  }

}

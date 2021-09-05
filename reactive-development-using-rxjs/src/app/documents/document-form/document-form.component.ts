import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-form',
  templateUrl: './document-form.component.html',
  styleUrls: ['./document-form.component.css']
})
export class DocumentFormComponent implements OnInit {

  documentId: string;
  showMyError = true;

  constructor() { }

  ngOnInit(): void {
  }

}

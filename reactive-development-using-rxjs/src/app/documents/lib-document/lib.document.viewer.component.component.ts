import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lib-dvc',
  templateUrl: './lib.document.viewer.component.component.html',
  styleUrls: ['./lib.document.viewer.component.component.css']
})
export class LibDocumentViewerComponent implements OnInit, OnChanges {

  @Input() documentId = '';
  @Input() showAppError = false;
  @Output() errorOccurred: EventEmitter<boolean> = new EventEmitter();

  showError = false;
  showDocument = false;

  constructor() { }

  ngOnInit(): void {
    this.getDocument(this.documentId);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('On changes object is :: ', changes);
    this.getDocument(this.documentId);
  }

  getDocument(documentId: string): void {
      console.log(`This document id passed is : ${documentId}!!!!!`);
      this.showDocument = false;
      this.showError = false;
      const documentIds = ['1234', '4567', '0987', '2222', '3333'];
      if (documentIds.includes(documentId)) {
        this.showDocument = true;
        this.errorOccurred.emit(false);
      } else {
        console.log('Document id not found :: ', documentId);
        this.showError = !this.showAppError;
        this.errorOccurred.emit(true);
      }
  }

}

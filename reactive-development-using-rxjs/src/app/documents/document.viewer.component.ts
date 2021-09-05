
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './document.viewer.component.html'
})
export class DocumentViewerComponent implements OnInit {

  documentId: string;
  showMyError = true;
  errorOccurred = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(`Document Params :::: ${params}`);
      if (params.id) {
        this.documentId = params.id;
      }
    });
  }

  showMyErrorPage(event: boolean): void {
    console.log('Event emitted ======= ', event);
    this.errorOccurred = event;
  }

}

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './models/contact.intreface';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  constructor(private http: HttpClient){}
  myContacts: Contact[];

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('api/contacts/contacts.json')
    .pipe(
      delay(2000),
      tap(data => console.log(`All Data from api :: ${JSON.stringify(data)}`)),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsucessful response code.
      // The response body may contain clues as to what went wrong
      errorMessage = `Server returned code : ${err.status}, error message is: ${err.message}`;
    }
    return throwError(errorMessage);
  }
}

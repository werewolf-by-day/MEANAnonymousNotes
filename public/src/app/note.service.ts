import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs';

@Injectable()
export class NoteService {
  
  notes;

  constructor(private _http: Http) { }
  
  retrieveNotes(callback) {
    this._http.get('/notes').subscribe(
      (response) => {
        this.notes = response.json();
        callback(this.notes);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addNote(note, callback) {
    let body = JSON.stringify(note);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this._http.post('/notes', body, options).subscribe(
      (response) => {
        callback();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
import { Component } from '@angular/core';
import { NoteService } from './note.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  notes;

  title = 'app';

  constructor(private _noteService: NoteService) {
      this.getNotes();
    }
  
    getNotes() {
      this._noteService.retrieveNotes((notes) => {
        this.notes = notes;
      });
    }

    noteAdded() {
      this.getNotes();
    }
}

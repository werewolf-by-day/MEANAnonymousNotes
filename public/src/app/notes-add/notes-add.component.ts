import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NoteService } from './../note.service';

@Component({
  selector: 'app-notes-add',
  templateUrl: './notes-add.component.html',
  styleUrls: ['./notes-add.component.css']
})
export class NotesAddComponent implements OnInit {

  @Output() newNoteEmitter = new EventEmitter();

  note = {text: ''}

  constructor(private _noteService: NoteService) { }

  addNote() {
    this._noteService.addNote(this.note, () => {
      this.note.text = '';
      this.newNoteEmitter.emit();
    });
  }

  ngOnInit() {
  }

}

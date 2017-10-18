import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';  

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NotesAddComponent } from './notes-add/notes-add.component';
import { NoteService } from './note.service';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NotesAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

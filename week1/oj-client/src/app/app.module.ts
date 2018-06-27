import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ProblemListComponent} from './components/problem-list/problem-list.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProblemListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

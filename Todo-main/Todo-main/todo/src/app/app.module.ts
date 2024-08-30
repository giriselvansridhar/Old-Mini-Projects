import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoappComponent } from './todoapp/todoapp.component';
import { FormsModule } from '@angular/forms';



// The formsmodule is imported

@NgModule({
  declarations: [
    AppComponent,
    TodoappComponent
  ],
  imports: [
    BrowserModule,
    FormsModule  //It is also imported here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

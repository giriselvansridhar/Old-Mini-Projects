import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { FormsModule } from '@angular/forms';

// import the forms module
@NgModule({
  declarations: [
    AppComponent,
    AppointmentListComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule
    // Import here also
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthentificationComponent } from './forms/authentification/authentification.component';
import { LangagesListComponent } from './langages-list/langages-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Add MatSnackBarModule
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule



@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    LangagesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

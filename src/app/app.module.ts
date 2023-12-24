import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthentificationComponent } from './forms/authentification/authentification.component';
import { LanguagesListComponent } from './languages-list/languages-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar'; // Add MatSnackBarModule
import { MatCardModule } from '@angular/material/card';
import { LanguageDetailsComponent } from './language-details/language-details.component';
import { HomeComponent } from './home/home.component'; // Import MatCardModule

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    LanguagesListComponent,
    LanguageDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

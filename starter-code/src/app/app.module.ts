import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { moviesService } from 'services/movies.service';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { RouterModule } from '@angular/router';
import { routes } from "./routes";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [moviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

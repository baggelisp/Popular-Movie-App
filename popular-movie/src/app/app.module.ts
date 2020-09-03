import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './_layout/top-bar/top-bar.component';
import { SidebarComponent } from './_layout/sidebar/sidebar.component';
import { MainSecrionComponent } from './_layout/main-secrion/main-secrion.component';
import { MovieCardComponent } from './_shared/_components/movie-card/movie-card.component';
import { MoviesListComponent } from './_shared/_components/movies-list/movies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SidebarComponent,
    MainSecrionComponent,
    MovieCardComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

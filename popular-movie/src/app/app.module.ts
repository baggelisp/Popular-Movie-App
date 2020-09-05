import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './_layout/top-bar/top-bar.component';
import { MovieCardComponent } from './_pages/home-page/_components/movie-card/movie-card.component';
import { MoviesListComponent } from './_pages/home-page/_components/movies-list/movies-list.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import {MyInterceptorService} from './_services/interceptor.interceptor';
import { DateForamtPipe } from './_shared/pipes/date-foramt.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VideoModalComponent } from './_shared/_components/video-modal/video-modal.component';
import { SanitizeHtmlPipePipe } from './_shared/pipes/sanitize-html-pipe.pipe';
import { HomePageComponent } from './_pages/home-page/home-page.component';

@NgModule({
	declarations: [
		AppComponent,
		TopBarComponent,
		MovieCardComponent,
		MoviesListComponent,
		DateForamtPipe,
		VideoModalComponent,
		SanitizeHtmlPipePipe,
		HomePageComponent
	],
	entryComponents: [VideoModalComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		NgbModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: MyInterceptorService, multi: true },
		],
	bootstrap: [AppComponent]
})
export class AppModule { }

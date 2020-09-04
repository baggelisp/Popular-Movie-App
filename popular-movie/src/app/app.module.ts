import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './_layout/top-bar/top-bar.component';
import { SidebarComponent } from './_layout/sidebar/sidebar.component';
import { MainSecrionComponent } from './_layout/main-secrion/main-secrion.component';
import { MovieCardComponent } from './_shared/_components/movie-card/movie-card.component';
import { MoviesListComponent } from './_shared/_components/movies-list/movies-list.component';
import { HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';

import {MyInterceptorService} from './_services/interceptor.interceptor';
import { DateForamtPipe } from './_shared/pipes/date-foramt.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {NgbRatingModule} from '@ng-bootstrap/ng-bootstrap';
import { VideoModalComponent } from './_shared/_components/video-modal/video-modal.component';
import { SanitizeHtmlPipePipe } from './_shared/pipes/sanitize-html-pipe.pipe';

@NgModule({
	declarations: [
		AppComponent,
		TopBarComponent,
		SidebarComponent,
		MainSecrionComponent,
		MovieCardComponent,
		MoviesListComponent,
		DateForamtPipe,
		VideoModalComponent,
		SanitizeHtmlPipePipe
	],
	entryComponents: [VideoModalComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		NgbModule,
		NgbRatingModule
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: MyInterceptorService, multi: true },
		],
	bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { HomeComponent } from './home.component';

@NgModule({
	declarations: [AppComponent, HomeComponent],
	imports: [BrowserModule, AppRoutingModule, CoreModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}

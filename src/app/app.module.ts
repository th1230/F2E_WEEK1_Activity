// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './router/app-routing.module';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { HeaderSectionComponent } from './components/modules/header-section/header-section.component';
import { Section1Component } from './components/section1/section1.component';
import { LoadingComponent } from './components/modules/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderSectionComponent,
    Section1Component,
    LoadingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

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
import { Section2Component } from './components/section2/section2.component';
import { Section3Component } from './components/section3/section3.component';
import { Section4Component } from './components/section4/section4.component';
import { Section5Component } from './components/section5/section5.component';
import { Section6Component } from './components/section6/section6.component';
import { Section7Component } from './components/section7/section7.component';
import { Section8Component } from './components/section8/section8.component';
import { Section9Component } from './components/section9/section9.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderSectionComponent,
    Section1Component,
    LoadingComponent,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component,
    Section6Component,
    Section7Component,
    Section8Component,
    Section9Component,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

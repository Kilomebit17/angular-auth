import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './components/header/header.component';
import {NavComponent} from './components/header/nav/nav.component';
import {PickServiceComponent} from './components/home/pick-service/pick-service.component';
import {SearchSectionComponent} from './components/home/search-section/search-section.component';
import {HistorySectionComponent} from './components/home/history-section/history-section.component';
import {ButtonComponent} from './components/button/button.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NewsSectionComponent} from './components/home/news-section/news-section.component';
import {CarouselSectionComponent} from './components/home/carousel-section/carousel-section.component';
import {CarouselCardComponent} from './components/home/carousel-section/carousel-card/carousel-card.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FooterComponent} from "./components/footer/footer.component";
import {RegisterFormComponent} from './components/auth/register-form/register-form.component';
import {LoginFormComponent} from './components/auth/login-form/login-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AuthService} from "./components/auth/auth.service";
import {NotFound404Component} from './components/not-found404/not-found404.component';
import {AngularFireAuthModule} from "@angular/fire/auth";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavComponent,
    PickServiceComponent,
    SearchSectionComponent,
    HistorySectionComponent,
    ButtonComponent,
    NewsSectionComponent,
    CarouselSectionComponent,
    CarouselCardComponent,
    FooterComponent,
    RegisterFormComponent,
    LoginFormComponent,
    NotFound404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    NgbModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

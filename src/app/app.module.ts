import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule, routerComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './pages/header/header.component';
import {NavComponent} from './pages/header/nav/nav.component';
import {PickServiceComponent} from './pages/home/pick-service/pick-service.component';
import {SearchSectionComponent} from './pages/home/search-section/search-section.component';
import {HistorySectionComponent} from './pages/home/history-section/history-section.component';
import {ButtonComponent} from './components/button/button.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NewsSectionComponent} from './pages/home/news-section/news-section.component';
import {CarouselSectionComponent} from './pages/home/carousel-section/carousel-section.component';
import {CarouselCardComponent} from './pages/home/carousel-section/carousel-card/carousel-card.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FooterComponent} from "./pages/footer/footer.component";
import {ReactiveFormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AuthService} from "./components/auth/auth.service";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {MatDialogModule} from '@angular/material/dialog';
import { UserShouldToLoginComponent } from './components/Dialogs/user-should-to-login/user-should-to-login.component';
import {MatButtonModule} from '@angular/material/button';
import { ErrorsComponent } from './components/Dialogs/errors/errors.component';


@NgModule({
  declarations: [
    AppComponent,
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
    routerComponents,
    UserShouldToLoginComponent,
    ErrorsComponent
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
    MatDialogModule,
    MatButtonModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

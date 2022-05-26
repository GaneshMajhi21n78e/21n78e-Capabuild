import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderCarouselComponent } from './components/header-carousel/header-carousel.component';
import { AdvantageCapaComponent } from './page/advantage-capa/advantage-capa.component';
import { CoursesComponent } from './page/courses/courses.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { LatestNewsComponent } from './page/latest-news/latest-news.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { WelcomeCapaComponent } from './components/welcome-capa/welcome-capa.component';
import { MentorsComponent } from './components/mentors/mentors.component';
import { HeadlinesComponent } from './components/headlines/headlines.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderCarouselComponent,
    AdvantageCapaComponent,
    CoursesComponent,
    AboutUsComponent,
    LatestNewsComponent,
    ContactUsComponent,
    LoginComponent,
    HomeComponent,
    WelcomeCapaComponent,
    MentorsComponent,
    HeadlinesComponent,
    GetInTouchComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

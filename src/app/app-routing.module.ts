import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { AdvantageCapaComponent } from './page/advantage-capa/advantage-capa.component';
import { ContactUsComponent } from './page/contact-us/contact-us.component';
import { CoursesComponent } from './page/courses/courses.component';
import { LatestNewsComponent } from './page/latest-news/latest-news.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
const routes: Routes = [
  {path:'', component:  HomeComponent },
  {path:'about-us', component:AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

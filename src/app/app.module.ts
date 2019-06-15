import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from '../components/topnav/topnav.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactComponent } from '../components/contact/contact.component';
import { EducationComponent } from '../components/education/education.component';
import { ProfComponent } from '../components/prof/prof.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { SkillsComponent } from '../components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    AboutComponent,
    ContactComponent,
    EducationComponent,
    ProfComponent,
    ProjectsComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

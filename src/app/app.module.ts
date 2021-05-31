import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageComponent } from './components/page/page.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimalGalleryComponent } from './components/animal-gallery/animal-gallery.component';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsPageComponent } from './components/animals-page/animals-page.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component'


const routes: Routes=[
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'animals',
    component: AnimalsPageComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    AnimalGalleryComponent,
    NavComponent,
    AnimalsPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    MatTableModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }

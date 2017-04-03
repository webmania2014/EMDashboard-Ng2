import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CourseComponent } from './component/courses.component';
import { AuthorsComponent } from './component/authors.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, CourseComponent, AuthorsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { routing } from './app.routing';
import { CategoryComponent } from './category/category.component';
import { OneAdComponent } from './one-ad/one-ad.component';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    CategoryComponent,
    OneAdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

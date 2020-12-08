import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GifComponent } from './gif/gif.component';
import { BuscarComponent } from './buscar/buscar.component';
import { AppRoutingModule } from '../app/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    GifComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

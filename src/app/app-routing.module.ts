import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifComponent } from './gif/gif.component';
import { BuscarComponent } from './buscar/buscar.component';

const APP_ROUTES: Routes = [
  { path: '', component: BuscarComponent },
  { path: 'resultado/:q', component: GifComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

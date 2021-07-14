import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ConcatComponent } from './concat/concat.component';
import { HomeComponent } from './home/home.component';

 

@NgModule({
  declarations: [
    AboutComponent,
    ConcatComponent,
    HomeComponent
  ],
  exports: [
    AboutComponent,
    ConcatComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ConcatComponent } from './pages/concat/concat.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes=[
  {path: 'about', component: AboutComponent},
  {path: 'concat', component: ConcatComponent},
  {path: 'home', component: HomeComponent},
  {path: '**', redirectTo:'home'}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }

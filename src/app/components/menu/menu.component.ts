import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

   rutas = [
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Concat',
      path: '/concat'
    },
    {
      name: 'Posts',
      path: '/posts'
    }

   ];

  constructor() { }

  ngOnInit(): void {
  }

}

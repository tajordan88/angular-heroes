import { Component } from '@angular/core';
import { Hero } from './hero';

import { HeroService } from './hero.service';
import { HEROES } from './mock-heroes';

@Component({
	selector: 'app-root',
	template: `
	  <h1>{{title}}</h1>
	  <nav>
	    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
	    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
	  </nav>
	  <router-outlet></router-outlet>
	`,
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	title = 'Angular Heroes App';
}
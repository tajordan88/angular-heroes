import { Component } from '@angular/core';
import { Hero } from './hero';

import { HeroService } from './hero.service';
import { HEROES } from './mock-heroes';

@Component({
	selector: 'app-root',
	template: `
		<h1>{{title}}</h1>
		<my-heroes></my-heroes>

	`
})

export class AppComponent {
	title = 'Angular Heroes App';
}
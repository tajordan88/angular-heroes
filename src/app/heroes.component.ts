import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';

import { HeroService } from './hero.service';
import { HEROES } from './mock-heroes';

import { RouterModule, Routes, Router } from '@angular/router';



@Component({
  selector: 'my-heroes',
  styleUrls: ['./heroes.component.css'],
  templateUrl: './heroes.component.html',
	providers: []
})
export class HeroesComponent implements OnInit {
	
	selectedHero: Hero = {
		id: HEROES[0].id,
		name: HEROES[0].name
	};
	heroes: Hero[] = HEROES;

	constructor(
		private router: Router,
		private heroService: HeroService) { }

	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	ngOnInit(): void {
		this.getHeroes();
	}
	
	onSelect(hero: Hero): void {
	  this.selectedHero = hero;
	}

	gotoDetail(): void {
	  this.router.navigate(['/detail', this.selectedHero.id]);
	}
}



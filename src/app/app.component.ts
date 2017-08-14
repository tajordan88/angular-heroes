import { Component } from '@angular/core';

export class Hero {
	id: number;
	name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
	<h1>{{title}}</h1>
	<h2>{{hero.name}} details!</h2>
	<div><label>id: </label>{{hero.id}}</div>
	<div>
		<label>name: </label>
		<input [(ngModel)]="hero.name" placeholder = "name">
	</div>
	`
})
export class AppComponent {
  title = 'Angular Heroes App';
  hero: Hero = {
  	id: 1,
  	name: 'Stormcloud'
  };
}


const HEROES: Hero[] = [
	{ id: 1, name: 'Bilbo Bagins' },
	{ id: 2, name: 'Frodo Bagins' },
	{ id: 3, name: 'Gandolf The Grey' },
	{ id: 4, name: 'Gandolf The White' },
	{ id: 5, name: 'Sauron' },
	{ id: 6, name: 'Legolas' },
	{ id: 7, name: 'Mary' },
	{ id: 8, name: 'Pipin' },
	{ id: 9, name: 'Orc' },
	{ id: 10, name: 'Elf' }
];
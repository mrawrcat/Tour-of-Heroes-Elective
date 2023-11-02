import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  selectedSidekick?: Hero;
  heroes: Hero[] = [];
  sidekicks: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
    this.getSidekicks();
  }

  onSelect(hero: Hero, sidekick: Hero): void {
    this.selectedHero = hero;
    this.selectedSidekick = sidekick;
    if (hero) {
      this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    }
    else if (sidekick) {
      this.messageService.add(`HeroesComponent: Selected sidekick id=${sidekick.id}`);
    }
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  getSidekicks(): void {
    this.heroService.getSidekicks()
      .subscribe(sidekicks => this.sidekicks = sidekicks);
  }

}

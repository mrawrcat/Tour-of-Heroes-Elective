import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES, SIDEKICKS } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getSidekicks(): Observable<Hero[]> {
    const sidekicks = of(SIDEKICKS);
    this.messageService.add('HeroService: fetched sidekicks');
    return sidekicks;
  }

  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }

  getSidekick(id: number): Observable<Hero> {
    const sidekicks = SIDEKICKS.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched sidekick id=${id}`);
    return of(sidekicks);
  }
}

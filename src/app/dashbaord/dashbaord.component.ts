import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  standalone:true,
  selector: 'app-dashboard',
  templateUrl: './dashbaord.component.html',
  styleUrls: [ './dashbaord.component.css' ],
  imports:[RouterLink, CommonModule]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }
}
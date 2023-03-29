import { Component, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  @Input() hero?: Hero;

  pets: any[] = [];
  selectedPet: string = '';

  constructor(
    private route: ActivatedRoute,
    private petsService: PetsService,
    private heroService: HeroService,
    private location: Location
  ) {this.pets = this.petsService.getPets();}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

  getPets(): void {
    this.pets = this.petsService.getPets();
  }

  save(): void {
    if (this.hero && this.selectedPet) {
      this.hero.pet = this.selectedPet; // Set the pet of the hero
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }
}

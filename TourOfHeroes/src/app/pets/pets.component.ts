import { Component, OnInit } from '@angular/core';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets: any[] = [];

  constructor(private petsService: PetsService) { }

  ngOnInit(): void {
    this.pets = this.petsService.getPets();
  }

  addPet(arg0: string) {
    this.petsService.addPet(arg0);
  }

  sortPets() {
    this.pets.sort((a,b) => a.localeCompare(b));
  }
}

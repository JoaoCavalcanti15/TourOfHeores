import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetsService {
  private pets = [
    { name: 'Rabbit' },
    { name: 'Parrot' },
    { name: 'Cat' },
    { name: 'Dog' }
  ];

  getPets(): string[] {
    return this.pets.map(pet => pet.name);
  }

  addPet(newPetName: string) {
    if (newPetName) {
      const newPet = {name: newPetName};
      this.pets.push(newPet);
    }
  }
}

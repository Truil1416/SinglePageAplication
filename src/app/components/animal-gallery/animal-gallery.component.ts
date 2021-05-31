import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../page.service';

@Component({
  selector: 'app-animal-gallery',
  templateUrl: './animal-gallery.component.html',
  styleUrls: ['./animal-gallery.component.css']
})
export class AnimalGalleryComponent implements OnInit {

  animal:string;

  constructor(private comunicationService: ComunicationService) { }

  ngOnInit(): void {
    this.comunicationService.enviarAnimalObservable.subscribe(animal =>{
      this.animal = animal;
    });
  }

}

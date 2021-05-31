import { Component, NgModule, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { ComunicationService} from '../page.service';

export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Nudibranquio'},
  {position: 2, name: 'Flabellina'},
  {position: 3, name: 'Chucho'},
  {position: 4, name: 'Ratón'},
  {position: 5, name: 'Morena'},
  {position: 6, name: 'Picopato'},
  {position: 7, name: 'Murión'},
  {position: 8, name: 'Lady Escarlata'},
  {position: 9, name: 'Angelote'},
  {position: 10, name: 'Planaria'},
  {position: 11, name: 'Thor'},
  {position: 12, name: 'Langosta Herreña'},
  {position: 13, name: 'Obispo'},
  {position: 14, name: 'MolaMola'},
  {position: 15, name: 'Manta Diablo'},
  {position: 16, name: 'Choco'},
  {position: 17, name: 'Rubio'},
  {position: 18, name: 'Fula de tres colas'},
];

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})


export class PageComponent implements OnInit {

  animal: string;


  displayedColumns: string[] = ['position', 'name'];

  dataSource = ELEMENT_DATA;

  constructor(private comunicationService: ComunicationService) { 
    
  }

  ngOnInit(): void {
  }
  cambioSeleccion(animal: string, event){
    this.comunicationService.enviarAnimal(animal);
    $(event.target).closest("tr").addClass("selected").siblings().removeClass("selected");
  }

}

import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({

    providedIn: 'root'

})

export class ComunicationService{
    animal: string;
    private enviarAnimalSubject = new Subject<string>();
    enviarAnimalObservable = this.enviarAnimalSubject.asObservable();

    enviarAnimal(animal: string){
        this.animal = animal;
        this.enviarAnimalSubject.next(animal);
    }
}
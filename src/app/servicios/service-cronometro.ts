import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceCronometro {

  constructor() {}

  crearObservableCronometro() : Observable<number>{
    return new Observable(observer => {
      let contador = 0;
      const intervalo = setInterval(()=> {
        contador++;
        observer.next(contador);
      },1000);
      
      return () => clearInterval(intervalo); 
    });
  }
}
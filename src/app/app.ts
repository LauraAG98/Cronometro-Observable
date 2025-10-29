import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServiceCronometro } from './servicios/service-cronometro';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App{
  protected readonly title = signal('cronometro');

  tiempo = signal(0);
  private subscripcion?: Subscription;
  
  constructor(private cronometroService : ServiceCronometro){}

  empezar(): void{
    if(!this.subscripcion){
      this.subscripcion = this.cronometroService.crearObservableCronometro().subscribe(seg => this.tiempo.set( seg ))
    }
  }

  reiniciar(): void{
    this.subscripcion?.unsubscribe();
    this.tiempo.set(0);
    this.subscripcion = this.cronometroService.crearObservableCronometro().subscribe(seg => this.tiempo.set( seg ))
  }
}
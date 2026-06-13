import { Component, signal } from '@angular/core';
import { Ejercicio01Contador } from "./ejercicio01-contador/ejercicio01-contador";

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [Ejercicio01Contador],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('Ejercicios');
}

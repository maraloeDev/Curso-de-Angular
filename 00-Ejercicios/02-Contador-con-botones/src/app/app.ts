import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  titulo = 'contador';
  valor = 0;

  btnIncremento() {
    this.valor++;
  }
  
  btnDecremento() {
    this.valor--;
  }
}

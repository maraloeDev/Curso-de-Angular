import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title="Mini Calculadora"
  numero1=0;
  numero2=0;
  resultado=0;

  sumar(){
    this.resultado += this.numero1 + this.numero2;
  }

  restar(){
    this.resultado -= this.numero1 + this.numero2;
  }

  limpiar(){
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
  }

}

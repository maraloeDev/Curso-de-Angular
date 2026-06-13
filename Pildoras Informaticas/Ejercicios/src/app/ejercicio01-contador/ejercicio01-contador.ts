import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-ejercicio01-contador',
  imports: [FormsModule],
  templateUrl: './ejercicio01-contador.html',
  styleUrl: './ejercicio01-contador.css',
})
export class Ejercicio01Contador {
  valor=0;

  getIncremento(){
    return this.valor+=1;
  }

  getDecremento(){

    if(this.valor > 0) {
      return this.valor-=1;
    }
  }
}
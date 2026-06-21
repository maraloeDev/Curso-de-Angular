import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  numero1 = 0;
  numero2 = 0;
  resultado = 0;
  
  Suma() {
    this.resultado = this.numero1 + this.numero2;
  }
  
  Resta() {
    this.resultado = this.numero1 - this.numero2;
  }
}

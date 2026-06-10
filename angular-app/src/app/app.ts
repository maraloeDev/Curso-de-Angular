import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { User } from './user/user';

@Component({
  selector: 'app-root', /*Etiqueta a utilizar en el index.html*/
  imports: [CommonModule, User], /*Indicamos todos los modulos a usar en el componente*/
  templateUrl: './app.html', /*Es lo que reenderiza la app*/
  styleUrl: './app.css'
})
export class App {
  city = "Valladolid"
  
}

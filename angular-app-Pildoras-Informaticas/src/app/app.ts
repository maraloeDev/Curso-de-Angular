import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Empleados } from './empleados/empleados';

@Component({
  selector: 'app-root', /*Selector del componente, se usará en el index.html para cargar el componente*/
  imports: [RouterModule, Empleados], /*Importamos el RouterModule para poder usar las directivas de enrutamiento en el template del componente*/
  templateUrl: './app.html', /*Ruta del template del componente, se puede usar una ruta relativa o absoluta*/
  styleUrl: './app.css' /*Ruta del archivo de estilos del componente, se puede usar una ruta relativa o absoluta*/
})
export class App {
  protected readonly title = signal('angular-app-Pildoras-Informaticas');

  saludo= "Hola, como estas"
}

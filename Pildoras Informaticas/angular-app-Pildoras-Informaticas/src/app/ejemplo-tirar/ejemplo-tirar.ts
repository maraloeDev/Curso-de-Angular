// El comando ng g c ejemplo-Tirar -s -t es para generar un nuevo componente, con el estilo y la plantilla en línea,
//  El comando -s es para generar el estilo en línea, y el comando -t es para generar la plantilla en línea.
import { Component } from '@angular/core';
@Component({
  selector: 'app-ejemplo-tirar',
  imports: [],
  template: ` <p>ejemplo-tirar works!</p> `,
  styles: ``,
})
export class EjemploTirar {}

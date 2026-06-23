import { Service } from '@angular/core';

@Service()
export class ServicioEmpleados {

    muestraMensaje(mensaje: string) {
        alert(mensaje);
    }
}

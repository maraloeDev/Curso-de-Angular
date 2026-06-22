export class Empleado {
  nombre = '';
  apellido = '';
  cargo = '';
  salario = 0;

  constructor(nombre: string, apellido: string, cargo: string, salario: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.cargo = cargo;
    this.salario = salario;
  }
}

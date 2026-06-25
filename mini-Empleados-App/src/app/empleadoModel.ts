export class Empleados {

    nombre:string='';
    apellidos:string ='';
    cargo:string='';
    salario:number=0;

    constructor(nombre:string, apellido:string,cargo:string, salario:number){
        this.nombre = nombre;
        this.apellidos = apellido;
        this.cargo = cargo;
        this.salario = salario;
    }
}
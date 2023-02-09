export class Employee {
    public nombre: string;
    public apellido: string;
    public trabajo: string;
    public pago: number;

    constructor(nombre: string, apellido: string, trabajo: string, pago: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.trabajo = trabajo;
        this.pago = pago;
    }
}
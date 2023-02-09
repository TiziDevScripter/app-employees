import { Component, Input } from "@angular/core";
import { Employee } from "../employee.module";

@Component({
    selector: "app-employee-list",
    template: `
    <div *ngFor="let empleado of employee; let i = index">
        <p>
            {{ i + 1 }}_ {{ empleado.nombre }} {{ empleado.apellido }} - {{ empleado.trabajo }} - {{ empleado.pago | currency }}
            <a [routerLink]="['/modificar',i]" [queryParams]="{action: 0}">Actualizar</a>&nbsp;
            <a [routerLink]="['/modificar',i]" [queryParams]="{action: 1}">Eliminar</a>
        </p>
        <!-- <app-characteristics-employee (newCharacteristics)="addNewCharacteristic($event)"></app-characteristics-employee> -->
        <ul style="list-style: none;">
            <li *ngFor="let characteristic of arrayCharacteristics">{{ characteristic }}</li>
        </ul>
    </div>
    `
})

export class EmployeeListComponent {
    @Input() employee!: Array<Employee>;

    public arrayCharacteristics: Array<string>;

    constructor() {
        this.arrayCharacteristics = [""];
    }

    addNewCharacteristic(value: string) {
        this.arrayCharacteristics.push(value)
    }
}

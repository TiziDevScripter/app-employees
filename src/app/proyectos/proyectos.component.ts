import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee.module';
import { EmployeeDataService } from '../employeeData.service';

@Component({
    selector: 'app-proyectos',
    templateUrl: 'proyectos.component.html',
    styleUrls: ["proyectos.component.css"]
})

export class ProyectosComponent implements OnInit {
    nombreValor!: string;
    apellidoValor!: string;
    trabajoValor!: string;
    pagoValor!: number;
    errorField: boolean;
    employees: Employee[] = []

    constructor(
        private router: Router,
        private myDataService: EmployeeDataService) {
        this.errorField = false;
    }

    ngOnInit() {
        this.myDataService.getEmployees().subscribe(myEmployees=>{
            console.log(myEmployees)
            this.employees = Object.values(myEmployees)
            this.myDataService.setEmployees(this.employees)
        })
    }

    aTrabajar(): void {
        if(
        this.nombreValor == "" ||
        this.apellidoValor == "" ||
        this.trabajoValor == "" ||
        this.pagoValor == null ||
        this.pagoValor == undefined
        ) {
            this.errorField = true;
        }else {
            this.errorField = false;
            let newEmployee = new Employee(this.nombreValor,this.apellidoValor,this.trabajoValor,this.pagoValor);
            this.myDataService.addNewEmployee(newEmployee);
            setTimeout(()=>this.router.navigate([""]),1000)
        };
    };

    toHome() {
        this.router.navigate([""])
    }
}
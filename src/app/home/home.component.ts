import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.module';
import { EmployeeDataService } from "../employeeData.service";

@Component({
    selector: 'app-home',
    templateUrl: 'home.component.html',
    styleUrls: ["home.component.css"]
})

export class HomeComponent implements OnInit{
    public nombreValor!: string;
    public apellidoValor!: string;
    public trabajoValor!: string;
    public pagoValor!: number;

    public errorField: boolean;

    public employees: Array<Employee> = [];
    constructor(
        private myDataService: EmployeeDataService) {
        this.errorField = false;

    };

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

        this.nombreValor = "";
        this.apellidoValor = "";
        this.trabajoValor = "";
        this.pagoValor = NaN;
        };
    };
}
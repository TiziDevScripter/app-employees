import { Injectable } from "@angular/core";
import { DataServices } from "./data.services";
import { Employee } from "./employee.module";
import { EmployeesService } from "./employees.service";

@Injectable({
    providedIn: "root"
})

export class EmployeeDataService {
    public employees: Array<Employee> = [];

    constructor(
        private employeesService: EmployeesService,
        private httpDataServices: DataServices
    ) {}

    addNewEmployee(newEmployee: Employee) {
        this.employeesService.showMessage(`Empleado que se va a agregar: \n
        Nombre: ${newEmployee.nombre} \n
        Apellido: ${newEmployee.apellido} \n
        Trabajo: ${newEmployee.trabajo} \n
        Cobrara: $${newEmployee.pago}`)
        this.employees.push(newEmployee);
        this.httpDataServices.saveEmployees(this.employees)
    }

    searchE(index: number) {
        return this.employees[index];
    }

    modifyEmployee(index: number, newEmployee: Employee) {
        // let employee = this.employees[index];
        // employee.nombre = newEmployee.nombre;
        // employee.apellido = newEmployee.apellido;
        // employee.trabajo = newEmployee.trabajo;
        // employee.pago = newEmployee.pago;
        this.httpDataServices.modifyEmployee(index, newEmployee)
    }

    deleteEmployee(index: number) {
        let employee = this.employees[index]
        this.employees.splice(index,1)
        this.httpDataServices.deleteEmployee(index, employee)
        this.httpDataServices.saveEmployees(this.employees)
    }

    getEmployees() {
        return this.httpDataServices.loadEmployees();
    }

    setEmployees(employees: Employee[]) {
        this.employees = employees
    }
}
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Employee } from "./employee.module";

@Injectable()

export class DataServices {
    constructor(private httpClient: HttpClient) {}

    loadEmployees() {
        return this.httpClient.get("https://primerapp-angular-firebase-default-rtdb.firebaseio.com/data.json");
    }
    saveEmployees(employees: Employee[]) {
        this.httpClient.put("https://primerapp-angular-firebase-default-rtdb.firebaseio.com/data.json", employees).subscribe(
            response => console.log("Todo bien -> ,", response),
            error => console.log("Error -> ", error)
        )
    }
    modifyEmployee(index: number, employeeModified: Employee) {
        let employeeSelected = `https://primerapp-angular-firebase-default-rtdb.firebaseio.com/data/${index}.json`

        this.httpClient.put(employeeSelected,employeeModified).subscribe(
            response => console.log("Todo bien", response),
            error => console.log("Error", error)
        )
        alert(`el empleado ahora será \n
        nombre: ${employeeModified.nombre} \n
        apellido: ${employeeModified.apellido} \n
        trabajo: ${employeeModified.trabajo} \n
        pago: ${employeeModified.pago}`)
    }
    deleteEmployee(index: number, employeeDeleted: Employee) {
        let employeeSelected = `https://primerapp-angular-firebase-default-rtdb.firebaseio.com/data/${index}.json`

        this.httpClient.delete(employeeSelected).subscribe(
            response => console.log("Todo bien", response),
            error => console.log("Error", error)
        )
        alert(`El empleado ${employeeDeleted.nombre} ${employeeDeleted.apellido} ha sido removido de tu lista.`)
    }
}
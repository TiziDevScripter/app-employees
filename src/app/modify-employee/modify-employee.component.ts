import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee.module';
import { EmployeeDataService } from '../employeeData.service';

@Component({
    selector: "app-modify-employee",
    templateUrl: "modify-employee.component.html",
    styleUrls: ["modify-employee.component.css"]
})

export class ModifyEmployeeComponent {
    public nombreValor!: string;
    public apellidoValor!: string;
    public trabajoValor!: string;
    public pagoValor!: number;
    public errorField: boolean;
    public index: number;
    public action!: number;
    public textButton!: string;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private employeesService: EmployeeDataService) {
        this.errorField = false;
        this.index = activatedRoute.snapshot.params["id"]
    }

    ngOnInit() {
        this.action = this.activatedRoute.snapshot.queryParams["action"]
        if(this.action == 0) this.textButton = "Modificar"
        else this.textButton = "Eliminar"
        let employee = this.employeesService.searchE(this.index)
        
        this.nombreValor = employee.nombre;
        this.apellidoValor = employee.apellido;
        this.trabajoValor = employee.trabajo;
        this.pagoValor = employee.pago;
    }
    
    modifyE() {
        if(this.action == 0) {
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
                this.employeesService.modifyEmployee(this.index, newEmployee);
                setTimeout(()=>this.router.navigate([""]),1000)
                
            };
        }else if(this.action == 1){
            this.employeesService.deleteEmployee(this.index);
            setTimeout(()=>this.router.navigate([""]),1000)
        }else alert("Error, porfavor dirijete a la página principal")
    }
}
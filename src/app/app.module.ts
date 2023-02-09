// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
// Components
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCharacteristicsComponent } from "./characteristics-employee/characteristics-employee.component";
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesComponent } from './quienes/quienes.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ModifyEmployeeComponent } from './modify-employee/modify-employee.component';
import { WrongRouteComponent } from './wrong-route/wrong-route.component';
// Services
import { EmployeesService } from "./employees.service";
import { EmployeeDataService } from './employeeData.service';
import { DataServices } from "./data.services";

const appRoutes: Routes = [
  {path: "", component: HomeComponent},
  {path: "proyectos", component: ProyectosComponent},
  {path: "quienessomos", component: QuienesComponent},
  {path: "contacto", component: ContactoComponent},
  {path: "modificar/:id", component: ModifyEmployeeComponent},
  {path: "**", component: WrongRouteComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProyectosComponent,
    QuienesComponent,
    ContactoComponent,
    EmployeeListComponent,
    EmployeeCharacteristicsComponent,
    ModifyEmployeeComponent,
    WrongRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    EmployeesService, 
    EmployeeDataService,
    DataServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
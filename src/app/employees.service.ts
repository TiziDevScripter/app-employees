import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  showMessage(message: string) {
    alert(message)
  }
}

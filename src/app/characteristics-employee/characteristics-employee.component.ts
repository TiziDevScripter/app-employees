import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-characteristics-employee",
    template: `
    <form>
        <input type="text" placeholder="Add characteristic" #char>
        <button (click)="onAddC(char.value)">Add</button>
    </form>
    `
})

export class EmployeeCharacteristicsComponent {
    @Output() newCharacteristics = new EventEmitter<string>();
    onAddC(characteristics: string):void {
        this.newCharacteristics.emit(characteristics);
    }
}
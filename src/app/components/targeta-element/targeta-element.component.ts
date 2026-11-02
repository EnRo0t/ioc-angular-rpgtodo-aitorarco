import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-targeta-element',
  styleUrl: './targeta-element.component.scss',
  templateUrl: './targeta-element.component.html',
})
export class TargetaElementComponent {

  /* Propiedades de tareas completadas y totales. Extraidas con input del componente padre task-list*/
  completed = input.required<number>();
  total = input.required<number>();
}

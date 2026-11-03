import { Component, input, output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  styleUrl: './task-item.component.scss',
  templateUrl: './task-item.component.html',
})
export class TaskItemComponent {
   /* Recibe las tareas del componente padre */
   task = input.required<Task>();
   /* Emite el id de la tarea al componente padre */
   toggled = output<number>();
   /* Avisa al componente padre si se ha seleccionado una tarea */
   selected = output<void>();
}

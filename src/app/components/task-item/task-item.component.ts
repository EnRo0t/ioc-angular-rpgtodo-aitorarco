import { Component, input, output } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-item',
  styleUrl: './task-item.component.scss',
  templateUrl: './task-item.component.html',
})
export class TaskItemComponent {
   task = input.required<Task>();
   toggled = output<number>(); // emite el id de la tarea
   selected = output<void>(); // Avisa si se ha seleccionado una tarea
}

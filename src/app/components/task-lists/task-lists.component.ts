import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';

@Component({
  imports: [TargetaElementComponent],
  selector: 'app-task-lists',
  styleUrl: './task-lists.component.scss',
  templateUrl: './task-lists.component.html',
})
export class TaskListsComponent {
	
	/* Creamos propiedad para almacenar las tareas */	
	tasks: Task[] = [];
	
	/* Inyectamos el servicio creando un objeto de su "clase" */
	constructor(
		private taskService: TaskService
	) {}
	
	/* Llamada al servicio */
	ngOnInit(): void {
		this.taskService.getTasks().subscribe(tasks => {
			this.tasks = tasks;
		
	});
     }
	/* Para contar el número de tareas completadas */
	get completedCount(): number {
    return this.tasks.filter(t => t.complete).length;
  }

}


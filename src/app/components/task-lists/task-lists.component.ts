import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task, TaskFilter } from '../../models/task.model';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';
import { TaskItemComponent } from '../task-item/task-item.component';
import { BarraFiltroComponent } from '../barra-filtro/barra-filtro.component';

@Component({
  imports: [TargetaElementComponent, TaskItemComponent, BarraFiltroComponent],
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

  /* Para marcar tareas completadas */
   toggleTask(id: number): void {
   	const task = this.tasks.find(t => t.id === id);
  	if (task) {
    	task.complete = !task.complete;
  	}
}
	filter: TaskFilter = 'all';

	/* Getter para mostrar las tareas pendientes, completadas o todas */
	get filteredTasks(): Task[] {
	switch (this.filter) {
		case 'pending':
		return this.tasks.filter(t => !t.complete);
		case 'completed':
		return this.tasks.filter(t => t.complete);
		default:
		return this.tasks;
	}
	}
	/* Setter para setear las tareas */
	setFilter(filter: TaskFilter): void {
	this.filter = filter;
	}


}


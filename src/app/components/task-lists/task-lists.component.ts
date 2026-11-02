import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task, TaskFilter, SearchFilters } from '../../models/task.model';
import { TargetaElementComponent } from '../targeta-element/targeta-element.component';
import { TaskItemComponent } from '../task-item/task-item.component';
import { BarraFiltroComponent } from '../barra-filtro/barra-filtro.component';
import { FiltroComponent } from '../filtro/filtro.component';

@Component({
  imports: [
    TargetaElementComponent,
    TaskItemComponent,
    BarraFiltroComponent,
    FiltroComponent,
  ],
  selector: 'app-task-lists',
  styleUrl: './task-lists.component.scss',
  templateUrl: './task-lists.component.html',
})
export class TaskListsComponent implements OnInit {

  /* Creamos propiedad para almacenar las tareas */
  tasks: Task[] = [];

  /* Filtro de estado (barra de filtros) */
  filter: TaskFilter = 'all';

  /* Filtro de texto y categoría (formulario) */
  searchFilters: SearchFilters = { text: '', category: '' };

  /* Inyectamos el servicio creando un objeto de su "clase" */
  constructor(private taskService: TaskService) {}

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

  /* Categorías únicas para el desplegable del formulario */
  get categories(): string[] {
    return [...new Set(this.tasks.map(t => t.category))];
  }

  /* Comprueba si una tarea cumple el filtro de estado */
  private matchesStatus(task: Task): boolean {
    if (this.filter === 'pending') return !task.complete;
    if (this.filter === 'completed') return task.complete;
    return true;
  }

  /* Getter que combina estado, texto y categoría */
  get filteredTasks(): Task[] {
    const text = this.searchFilters.text.toLowerCase();
    const category = this.searchFilters.category;

    return this.tasks.filter(t => {
      if (!this.matchesStatus(t)) return false;
      if (text && !t.name.toLowerCase().includes(text)) return false;
      if (category && t.category !== category) return false;
      return true;
    });
  }

  /* Para marcar tareas completadas */
  toggleTask(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.complete = !task.complete;
    }
  }

  /* Setter para el filtro de estado */
  setFilter(filter: TaskFilter): void {
    this.filter = filter;
  }

  /* Aplica el filtro de texto y categoría recibido del formulario */
  applyFilters(filters: SearchFilters): void {
    this.searchFilters = filters;
  }

  /* Restablece el filtro de texto y categoría */
  resetFilters(): void {
    this.searchFilters = { text: '', category: '' };
  }
}

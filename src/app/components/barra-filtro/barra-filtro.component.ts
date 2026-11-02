import { Component, input, output } from '@angular/core';
import { TaskFilter } from '../../models/task.model'; 

@Component({
  selector: 'app-barra-filtro',
  styleUrl: './barra-filtro.component.scss',
  templateUrl: './barra-filtro.component.html',
})
export class BarraFiltroComponent {
  active = input.required<TaskFilter>();
  filterChange = output<TaskFilter>();

  filters: { value: TaskFilter; label: string }[] = [
    { value: 'all', label: 'Todas' },
    { value: 'pending', label: 'Pendientes' },
    { value: 'completed', label: 'Completadas' },
  ];

}

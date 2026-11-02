import { Injectable } from '@angular/core'; /* Importa el decorador */
import { Observable, of } from 'rxjs'; /* Permite trabajar con observables */

import { Task } from '../models/task.model'; // Importo modelo
import { TASK_MOCK } from '../mocks/task.mock'; // Importo base de datos

/* Esto permite inyectar el servicio */
@Injectable({
  providedIn: 'root' /* Esto hace que sea inyectable en toda la app */
})

export class TaskService {

  /* Array que almacena las tareas de la db mock */
  private tasks: Task[] = [...TASK_MOCK];
  /* Método que devuelve las tareas */ 
  getTasks(): Observable<Task[]> {
    return of(this.tasks);
  }
  /* Méotodo para obtener una tarea según su ID */
  getTaskById(id: number): Observable<Task | undefined> {
    return of(this.tasks.find(task => task.id === id));
  }
}

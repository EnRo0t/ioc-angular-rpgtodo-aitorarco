import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListsComponent } from './components/task-lists/task-lists.component';
/* Importamos el componente userList */
import { UserListComponent } from './components/user-list/user-list.component';


@Component({
  imports: [RouterOutlet, TaskListsComponent, UserListComponent],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {
  public nomAplicacio = 'todoRPG';
 
}

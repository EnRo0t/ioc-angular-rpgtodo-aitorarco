import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListsComponent } from './components/task-lists/task-lists.component';


@Component({
  imports: [RouterOutlet, TaskListsComponent],
  selector: 'app-root',
  styleUrl: './app.component.scss',
  templateUrl: './app.component.html',
})
export class App {
  public nomAplicacio = 'todoRPG';
}

import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { userService } from '../../services/api.service';

@Component({
  selector: 'app-users-list',
  imports: [AsyncPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  private usersService = inject(userService);

  /* Observable con los usuarios ya adaptados (ApiIntern[]) */
  users$ = this.usersService.getUsersAdapted();
}
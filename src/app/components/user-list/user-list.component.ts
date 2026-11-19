import { Component, inject, OnInit } from '@angular/core'; /* Añado OnInit y quito AsyncPipe (ya no uso observables en la plantilla) */
import { userService } from '../../services/api.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent implements OnInit {
  private usersService = inject(userService);

  /* Expongo a la plantilla los signals del servicio (usuarios, carga y error) */
  users = this.usersService.users;
  loading = this.usersService.loading;
  error = this.usersService.error;

  /* Al iniciar el componente pido la carga de usuarios al servicio */
  ngOnInit(): void {
    this.usersService.loadUsers();
  }

  /* Método para el botón de reintentar */
  retry(): void {
    this.usersService.retry();
  }
}
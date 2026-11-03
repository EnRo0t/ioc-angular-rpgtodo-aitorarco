import { Component, input, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { SearchFilters } from '../../models/task.model';

@Component({
  selector: 'app-filtro',
  imports: [FormsModule],
  styleUrl: './filtro.component.scss',
  templateUrl: './filtro.component.html',
})


export class FiltroComponent {
  
  /* Propiedad que contiene la lista de categorias passada por el componente padre para rellenar el desplegable del formulario */
  categories = input.required<string[]>();
  /* Le envia al componente padre un objeto con lo que el usuario ha escrito (texto, categoria) */
  applied = output<SearchFilters>();
  /* Le envia al componente padre la petición de limpiar el formulario */
  cleared = output<void>();

  /* Campos del formulario */
  text = '';
  category = '';

  apply(): void {
    this.applied.emit({ text: this.text.trim(), category: this.category });
  }

  /* Método para restablecer filtros */
  clear(form: NgForm): void {
    form.resetForm({ text: '', category: '' });
    this.cleared.emit();
  }
}

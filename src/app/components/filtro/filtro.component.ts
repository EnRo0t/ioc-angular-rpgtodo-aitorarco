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
  
  categories = input.required<string[]>();
  applied = output<SearchFilters>();
  cleared = output<void>();

  text = '';
  category = '';

  apply(): void {
    this.applied.emit({ text: this.text.trim(), category: this.category });
  }

  clear(form: NgForm): void {
    form.resetForm({ text: '', category: '' });
    this.cleared.emit();
  }
}
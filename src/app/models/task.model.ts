export interface Task {
	id: number;
	name: string;
	description: string;
	category: string;
	date: string;
	level: number; // Este sería el campo númerico relevante
	complete: boolean; // Si la tarea esta completada o no  
}

/* Para barra de filtros */
export type TaskFilter = 'all' | 'pending' | 'completed';

/* Para el filtro */
export interface SearchFilters {
  text: string;
  category: string;
}

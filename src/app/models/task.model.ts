export interface Task {
	id: number;
	name: string;
	description: string;
	category: string;
	date: Date;
	level: number; // Este sería el campo númerico relevante
	complete: boolean; // Si la tarea esta completada o no  
}

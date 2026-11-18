/* Este es el modelo interno de la API. Aquí los tipos si son estrictos */
export interface ApiIntern {
    id: number;
    name: string;
    description: string;
    level: number;
    exp: number;
    date: string;
    tasks: number;
    ascend: boolean;  
}
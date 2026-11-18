/* Este sería el modelo de la API. Acepta varios tipos y nulls */
export interface Api {
    id: string | number;
    name?: string | null;
    description?: string | null;
    level?: number | string | null;
    exp?: number | string | null;
    date?: string | null;
    tasks?: number | string | null;
    ascend?: boolean | null;
}

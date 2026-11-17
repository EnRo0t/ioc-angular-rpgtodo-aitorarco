import { Service } from '@angular/core';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/* Importo la constante de la url de la API de un archivo de constantes */
import { API_CONFIG } from '../constants/api.constants';

/* Decorador que sirve para decirle a Angular que este servicio puede ser inyectado en otros componentes o servicios */
@Injectable({
    providedIn: 'root'
})

export class Api {
    private http = inject(HttpClient);
    private apiUrl = `${API_CONFIG.BASE_URL}/users`;

    /* Método que devuelve los usuarios de la mock api */
    getUsers() {
        return this.http.get(this.apiUrl);
    }
}

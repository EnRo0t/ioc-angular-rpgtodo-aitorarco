import { Service } from '@angular/core';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/* Importo la constante de la url de la API de un archivo de constantes */
import { API_CONFIG } from '../constants/api.constants';

/* Importo modelo externo, interno y adaptador */
import { Api } from '../models/api.model';
import { ApiIntern } from '../models/apiIntern.model';
import { adaptaLista } from '../adapters/api.adapter';

/* Importo map y observable */
import { map, Observable } from 'rxjs';

/* Decorador que sirve para decirle a Angular que este servicio puede ser inyectado en otros componentes o servicios */
@Injectable({
    providedIn: 'root'
})

export class userService {
    private http = inject(HttpClient);
    private apiUrl = `${API_CONFIG.BASE_URL}/users`;

    /* Método que devuelve los usuarios de la mock api ya adaptados al modelo interno */
    getUsersAdapted(): Observable<ApiIntern[]> {
        return this.http.get<Api[]>(this.apiUrl).pipe(map(adaptaLista));
    }
}

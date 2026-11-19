import { Injectable, inject, signal } from '@angular/core'; /* Añado 'signal' para el estado */
import { HttpClient } from '@angular/common/http';
/* Importo la constante de la url de la API de un archivo de constantes */
import { API_CONFIG } from '../constants/api.constants';

/* Importo modelo externo, interno y adaptador */
import { Api } from '../models/api.model';
import { ApiIntern } from '../models/apiIntern.model';
import { adaptaLista, adaptaUsuario } from '../adapters/api.adapter'; /* Añado adaptaUsuario (adapta un solo usuario, para la respuesta del POST) */

/* Importo map y observable */
import { catchError, EMPTY, map, Observable, of, Subject, switchMap, tap } from 'rxjs'; /* Añado los operadores y utilidades que necesito para el flujo */

/* Decorador que sirve para decirle a Angular que este servicio puede ser inyectado en otros componentes o servicios */
@Injectable({
    providedIn: 'root'
})

export class userService {
    private http = inject(HttpClient);
    private apiUrl = `${API_CONFIG.BASE_URL}/users`;

    /* Estado que la interfaz lee: datos, carga y error */
    users = signal<ApiIntern[]>([]);
    /* Signal para el estado de carga */
    loading = signal(false);
    error = signal<string | null>(null);

    /* Cada vez que este Subject emite, se lanza una consulta GET */
    private reload$ = new Subject<void>();

    /* Constructor nuevo con el flujo de carga/recarga */
    constructor() {
        this.reload$
            .pipe(
                tap(() => {
                    this.loading.set(true);
                    this.error.set(null);
                }),
                /* switchMap cancela la petición anterior si se lanza otra */
                switchMap(() =>
                    this.getUsersAdapted().pipe(
                        /* catchError dentro del switchMap para que un error no cierre el flujo */
                        catchError(() => {
                            this.error.set('No se han podido cargar los usuarios');
                            return of(null);
                        })
                    )
                )
            )
            .subscribe((result) => {
                if (result) {
                    this.users.set(result);
                }
                this.loading.set(false);
            });
    }

    /* Método que devuelve los usuarios de la mock api ya adaptados al modelo interno */
    getUsersAdapted(): Observable<ApiIntern[]> {
        return this.http.get<Api[]>(this.apiUrl).pipe(map(adaptaLista));
    }

    /* Método nuevo, carga o recarga los usuarios */
    loadUsers(): void {
        this.reload$.next();
    }

    /* Método nuevo, reintenta la última consulta */
    retry(): void {
        this.reload$.next();
    }

    /* Crear elemento con POST */
    /* Completo el método: envía el usuario, adapta la respuesta y gestiona carga y error */
    postUser(user: ApiIntern): Observable<ApiIntern> {
        this.loading.set(true);
        this.error.set(null);

        return this.http.post<Api>(this.apiUrl, user).pipe(
            map(adaptaUsuario),
            tap((created) => {
                this.users.update((list) => [...list, created]);
                this.loading.set(false);
            }),
            catchError(() => {
                this.error.set('No se ha podido crear el usuario');
                this.loading.set(false);
                return EMPTY;
            })
        );
    }
}

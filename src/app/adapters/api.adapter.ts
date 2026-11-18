/* Adaptador que sirve para adaptar los datos de la API al modelo interno */

import { Api } from '../models/api.model';
import { ApiIntern } from '../models/apiIntern.model';

/** Limpia espacios y sustituye texto vacío o nulo por un valor por defecto */
const textoLimpio = (valor: string | null | undefined, defecto: string): string => {
  const limpio = valor?.trim();
  return limpio ? limpio : defecto;
};

/** Convierte a número de forma segura y evita negativos */
const aNumero = (valor: number | string | null | undefined, defecto = 0): number => {
  if (valor === null || valor === undefined) return defecto;
  const num = typeof valor === 'number' ? valor : Number(valor.trim().replace(',', '.'));
  return Number.isFinite(num) ? Math.max(0, num) : defecto;
};

/** Convierte el id (string o number) a number */
const aId = (valor: string | number): number => {
  const num = Number(valor);
  return Number.isFinite(num) ? num : 0;
};

/** Normaliza la fecha al formato yyyy-MM-dd, o '' si no es válida */
const aFecha = (valor: string | null | undefined): string => {
  const limpio = valor?.trim();
  if (!limpio) return '';
  const fecha = new Date(limpio);
  return isNaN(fecha.getTime()) ? '' : fecha.toISOString().slice(0, 10);
};

/** Adaptador principal: API -> modelo interno */
export const adaptaUsuario = (api: Api): ApiIntern => ({
  id: aId(api.id),
  name: textoLimpio(api.name, 'Sin nombre').toLowerCase(),
  description: textoLimpio(api.description, 'Sin descripción'),
  level: Math.floor(aNumero(api.level)),
  exp: aNumero(api.exp),
  date: aFecha(api.date),
  tasks: Math.floor(aNumero(api.tasks)),
  ascend: api.ascend ?? false,
});

export const adaptaLista = (lista: Api[]): ApiIntern[] => lista.map(adaptaUsuario);
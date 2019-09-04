import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface TaskI {
    id?: string;
    nombre: string;
    descripcion: string;
    direccion: string;
    inicio: string;
    final: string;
}
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TaskI } from '../models/task.interface';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  private eventosColeccion: AngularFirestoreCollection<TaskI>;
  private eventos: Observable<TaskI[]>;

  constructor(db:AngularFirestore) {
    this.eventosColeccion = db.collection<TaskI>('evento');
    this.eventos = this.eventosColeccion.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        });
      }      
    ));
  }

  getEventos(){
    return this.eventos;
  }

  getEvento(id:string){
    return this.eventosColeccion.doc<TaskI>(id).valueChanges();
  }

  addEvento(evento:TaskI){
    return this.eventosColeccion.add(evento);
  }

}

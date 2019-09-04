import { Component, OnInit } from '@angular/core';
import { TaskI } from '../models/task.interface';
import { EventoService } from '../services/evento.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {

  evento: TaskI = {
    nombre: '',
    descripcion: '',
    direccion: '',
    inicio: '',
    final: '',
  };

  eventoId = null;

  constructor(private ruta: ActivatedRoute, private nav: NavController, private eventoServicio: EventoService, private cargando: LoadingController) { }

  ngOnInit() {

    this.eventoId = this.ruta.snapshot.params['id'];
    if(this.eventoId){
      this.cargarEvento();
    }
  }

  async cargarEvento(){
    const cargar = await this.cargando.create({
      message: 'Cargando...',
    });
    await cargar.present();
    this.eventoServicio.getEvento(this.eventoId).subscribe(res => {
      cargar.dismiss();
      this.evento = res;
    });
  }

}

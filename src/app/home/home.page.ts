import { Component, Input, OnInit } from '@angular/core';
import{ ActivatedRoute, Router } from '@angular/router';
import { TaskI } from '../models/task.interface';
import { EventoService } from '../services/evento.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  eventos: TaskI[];

  userData = null;
  constructor(private eventoServicio: EventoService, private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.userData = this.router.getCurrentNavigation().extras.state.userData;
      }
    });
  }

  ngOnInit(){
    this.eventoServicio.getEventos().subscribe(res => {
      this.eventos = res;
    })
  }

}

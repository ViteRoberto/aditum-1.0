import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage implements OnInit {

  constructor(public router: Router) { }

  entrar(){
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {
  }

}

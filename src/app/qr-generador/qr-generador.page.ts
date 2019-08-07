import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr-generador',
  templateUrl: './qr-generador.page.html',
  styleUrls: ['./qr-generador.page.scss'],
})
export class QrGeneradorPage implements OnInit {

  private chars = '';
  private charslength = null;
  private rdmstring = null;
  private strings = [];
  private MAX = 10;
  constructor() { }

  ngOnInit() {
  }

  createString(max){
    this.chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.charslength = this.chars.length;
    this.rdmstring = '';
    for ( let i = 1; i<max; i++){
      this.rdmstring += this.chars[Math.floor(Math.random() * this.charslength)];
    }
    this.strings.push(this.rdmstring);
  }

  createArrayString(){
    for ( let i = 1; i<this.MAX; i++){
      this.createString(50);
    }
  }
}

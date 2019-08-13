import { Component, OnInit } from '@angular/core';
import { QRScanner,QRScannerStatus } from '@ionic-native/qr-scanner/ngx';

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
  private qrCounter;
  constructor(private qrScanner: QRScanner) { 
    this.qrCounter = 0;
  }

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
    for ( let i = 1; i<=this.qrCounter; i++){
      this.createString(50);
    }
  }

  qrReader(){
    // Optionally request the permission early
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
      if (status.authorized) {
      // camera permission was granted

      // start scanning
      let scanSub = this.qrScanner.scan().subscribe((text: string) => {
        console.log('Scanned something', text);

        this.qrScanner.hide(); // hide camera preview
        scanSub.unsubscribe(); // stop scanning
      });

      } else if (status.denied) {
      // camera permission was permanently denied
      // you must use QRScanner.openSettings() method to guide the user to the settings page
      // then they can grant the permission from there
      } else {
      // permission was denied, but not permanently. You can ask for permission again at a later time.
      }
    })
    .catch((e: any) => console.log('Error is', e));
  }

  qrPlus(){
    this.qrCounter ++;
  }

  qrMinus(){
    if(this.qrCounter < 1){
      this.qrCounter = 0;
    }
    else{
      this.qrCounter --;
    }
  }
}

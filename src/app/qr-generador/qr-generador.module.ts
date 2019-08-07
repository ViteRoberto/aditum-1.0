import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { QrGeneradorPage } from './qr-generador.page';

const routes: Routes = [
  {
    path: '',
    component: QrGeneradorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QrGeneradorPage]
})
export class QrGeneradorPageModule {}

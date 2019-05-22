import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController, IonBackButton } from '@ionic/angular';

@Component({
  selector: 'app-libroac1',
  templateUrl: './libroac1.page.html',
  styleUrls: ['./libroac1.page.scss'],
})
export class Libroac1Page implements OnInit {
  constructor(public NavCtrl: NavController){ }

  ngOnInit() {
  }

  irLibros() {
    this.NavCtrl.navigateBack('accion');

  }
  irPago(){

    this.NavCtrl.navigateForward('pago');
  }
}

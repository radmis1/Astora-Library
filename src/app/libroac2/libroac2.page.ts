import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController, IonBackButton } from '@ionic/angular';


@Component({
  selector: 'app-libroac2',
  templateUrl: './libroac2.page.html',
  styleUrls: ['./libroac2.page.scss'],
})
export class Libroac2Page implements OnInit {

  constructor(public NavCtrl: NavController) { }

  ngOnInit() {
  }
  irLibros() {
    this.NavCtrl.navigateBack('accion');

  }
  irPago(){

    this.NavCtrl.navigateForward('pago');
  }
}

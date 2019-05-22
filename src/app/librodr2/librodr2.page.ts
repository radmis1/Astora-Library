import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-librodr2',
  templateUrl: './librodr2.page.html',
  styleUrls: ['./librodr2.page.scss'],
})
export class Librodr2Page implements OnInit {

  constructor(public NavCtrl: NavController) { }

  ngOnInit() {
  }
  irLibros() {
    this.NavCtrl.navigateBack('drama');

  }
  irPago(){

    this.NavCtrl.navigateForward('pago');
  }
}

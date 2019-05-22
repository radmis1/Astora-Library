import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-libroav2',
  templateUrl: './libroav2.page.html',
  styleUrls: ['./libroav2.page.scss'],
})
export class Libroav2Page implements OnInit {

  constructor(public NavCtrl: NavController) { }

  ngOnInit() {
  }
  irLibros() {
    this.NavCtrl.navigateBack('aventura');

  }
  irPago(){

    this.NavCtrl.navigateForward('pago');
  }
}

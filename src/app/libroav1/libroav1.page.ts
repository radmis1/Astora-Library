import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-libroav1',
  templateUrl: './libroav1.page.html',
  styleUrls: ['./libroav1.page.scss'],
})
export class Libroav1Page implements OnInit {

  constructor(public NavCtrl: NavController)  { }

  ngOnInit() {
  }
  irLibros() {
    this.NavCtrl.navigateBack('aventura');

  }
  irPago(){

    this.NavCtrl.navigateForward('pago');
  }
}

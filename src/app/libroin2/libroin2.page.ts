import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-libroin2',
  templateUrl: './libroin2.page.html',
  styleUrls: ['./libroin2.page.scss'],
})
export class Libroin2Page implements OnInit {

  constructor(public NavCtrl: NavController) { }

  ngOnInit() {
  }
  irLibros() {
    this.NavCtrl.navigateBack('infantil');

  }
   irPago(){

    this.NavCtrl.navigateForward('pago');
  }
}

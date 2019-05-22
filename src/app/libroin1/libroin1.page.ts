import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-libroin1',
  templateUrl: './libroin1.page.html',
  styleUrls: ['./libroin1.page.scss'],
})
export class Libroin1Page implements OnInit {

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

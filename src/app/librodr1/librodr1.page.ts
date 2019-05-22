import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-librodr1',
  templateUrl: './librodr1.page.html',
  styleUrls: ['./librodr1.page.scss'],
})
export class Librodr1Page implements OnInit {


  constructor(public NavCtrl: NavController){ }

  ngOnInit() {
  }
  irLibros() {
    this.NavCtrl.navigateBack('drama');

  }
  irPago(){

    this.NavCtrl.navigateForward('pago');
  }
}

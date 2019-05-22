import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController, IonBackButton } from '@ionic/angular';


@Component({
  selector: 'app-accion',
  templateUrl: './accion.page.html',
  styleUrls: ['./accion.page.scss'],
})
export class AccionPage implements OnInit {

  constructor(public NavCtrl: NavController) { }

  ngOnInit() {
  }

  irLibros() {
    this.NavCtrl.navigateBack('tabs');

  }
  verLibroAc1() {

    this.NavCtrl.navigateForward('libroac1');

  }
  verLibroAc2() {

    this.NavCtrl.navigateForward('libroac2');

  }


}

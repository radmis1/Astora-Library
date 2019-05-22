import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-aventura',
  templateUrl: './aventura.page.html',
  styleUrls: ['./aventura.page.scss'],
})
export class AventuraPage implements OnInit {

  constructor(public NavCtrl: NavController) { }

  ngOnInit() {
  }


  irLibros() {
    this.NavCtrl.navigateBack('tabs');

  }
  verLibroAv1() {

    this.NavCtrl.navigateForward('libroav1');

  }
  verLibroAv2() {

    this.NavCtrl.navigateForward('libroav2');

  }

}

import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-infantil',
  templateUrl: './infantil.page.html',
  styleUrls: ['./infantil.page.scss'],
})
export class InfantilPage implements OnInit {

  constructor(public NavCtrl: NavController) { }
  


  ngOnInit() {

  }

  irLibros() {
    this.NavCtrl.navigateBack('tabs');

  }
  verLibroin1() {

    this.NavCtrl.navigateForward('libroin1');

  }
  verLibroin2() {

    this.NavCtrl.navigateForward('libroin2');

  }
}

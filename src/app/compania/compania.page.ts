import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController, IonBackButton } from '@ionic/angular';

@Component({
  selector: 'app-compania',
  templateUrl: './compania.page.html',
  styleUrls: ['./compania.page.scss'],
})
export class CompaniaPage implements OnInit {

  constructor(public NavCtrl: NavController) { }

  ngOnInit() {
  }
  irLibros() {
    this.NavCtrl.navigateBack('tabs');

  }
}

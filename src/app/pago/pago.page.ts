import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController, IonBackButton } from '@ionic/angular';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

  constructor(public NavCtrl: NavController){ }

  ngOnInit() {
  }
  irLibros() {
    this.NavCtrl.navigateBack('tabs');

  }
}

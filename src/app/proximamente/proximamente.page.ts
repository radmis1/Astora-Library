import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController, IonBackButton } from '@ionic/angular';

@Component({
  selector: 'app-proximamente',
  templateUrl: './proximamente.page.html',
  styleUrls: ['./proximamente.page.scss'],
})
export class ProximamentePage implements OnInit {

  constructor(public NavCtrl: NavController){ }

  ngOnInit() {
  }
  irLibros() {
    this.NavCtrl.navigateBack('tabs');

  }
}

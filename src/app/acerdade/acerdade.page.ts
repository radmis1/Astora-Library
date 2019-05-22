import { Component, OnInit } from '@angular/core';
import { ActionSheetController, NavController, IonBackButton } from '@ionic/angular';

@Component({
  selector: 'app-acerdade',
  templateUrl: './acerdade.page.html',
  styleUrls: ['./acerdade.page.scss'],
})
export class AcerdadePage implements OnInit {

  constructor(public NavCtrl: NavController){ }

  ngOnInit() {
  }

  irLibros() {
    this.NavCtrl.navigateBack('tabs');

  }
}

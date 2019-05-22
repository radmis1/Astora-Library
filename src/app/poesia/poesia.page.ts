import { Component, OnInit } from '@angular/core';
import {ActionSheetController, NavController} from '@ionic/angular';
@Component({
  selector: 'app-poesia',
  templateUrl: './poesia.page.html',
  styleUrls: ['./poesia.page.scss'],
})
export class PoesiaPage implements OnInit {

  constructor(public NavCtrl : NavController){}

  ngOnInit() {
  }

  verLibropo1(){

    this.NavCtrl.navigateForward('libropo1');

  }
  verLibropo2(){

    this.NavCtrl.navigateForward('libropo2');

  }
}
